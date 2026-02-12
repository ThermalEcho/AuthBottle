@echo off
"C:\\Program Files\\Microsoft\\jdk-17.0.17.10-hotspot\\bin\\java" ^
  --class-path ^
  "C:\\Users\\filip\\.gradle\\caches\\modules-2\\files-2.1\\com.google.prefab\\cli\\2.1.0\\aa32fec809c44fa531f01dcfb739b5b3304d3050\\cli-2.1.0-all.jar" ^
  com.google.prefab.cli.AppKt ^
  --build-system ^
  cmake ^
  --platform ^
  android ^
  --abi ^
  arm64-v8a ^
  --os-version ^
  24 ^
  --stl ^
  c++_shared ^
  --ndk-version ^
  27 ^
  --output ^
  "C:\\Users\\filip\\AppData\\Local\\Temp\\agp-prefab-staging10227973362540417622\\staged-cli-output" ^
  "C:\\Users\\filip\\.gradle\\caches\\8.14.3\\transforms\\1657b42eefcb6e428a0c7a95fe57a3c2\\transformed\\react-android-0.81.5-debug\\prefab" ^
  "C:\\Projects\\AuthBottle\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-reanimated\\1f6hu3z5" ^
  "C:\\Projects\\AuthBottle\\android\\app\\build\\intermediates\\cxx\\refs\\react-native-worklets\\1x5f221o" ^
  "C:\\Users\\filip\\.gradle\\caches\\8.14.3\\transforms\\f9731cddd9a0288f7defb6034aa46619\\transformed\\hermes-android-0.81.5-debug\\prefab" ^
  "C:\\Users\\filip\\.gradle\\caches\\8.14.3\\transforms\\6d3677e35d40c73eb3fed73ec12789f0\\transformed\\fbjni-0.7.0\\prefab"
