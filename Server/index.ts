import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { prisma } from './lib/prisma';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/register', async (req, res) => {
  const { primaryemail, secondaryemail, username, password, confirmpassword, phonenumber } = req.body;

  if (!primaryemail || !secondaryemail || !username || !password) {
    res.status(400).json({ message: 'All required fields must be filled.' });
    return;
  }

  if (password !== confirmpassword) {
    res.status(400).json({ message: 'Passwords do not match.' });
    return;
  }

  const existing = await prisma.user.findFirst({
    where: { OR: [{ primaryemail }, { username }] },
  });

  if (existing) {
    res.status(409).json({ message: 'Email or username already in use.' });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      primaryemail,
      secondaryemail,
      username,
      password: hashedPassword,
      phonenumber: phonenumber || null,
    },
  });

  res.status(201).json({ success: true, user });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));