## How to run the app in web or simulators/emulators

```language
% npm run web
% npm run ios
% npm run android
```



## How to run the app in physical device

### Android


```language
% adb devices    
List of devices attached
R5CX80PBYPE	device
emulator-5554	device

```


```language
% adb kill-server
```


open Expo Go app in th edevice and run:


```language
% npm run android
```



### iOS

(base)  FitnessApp % npm run ios

And scan the QR code with the Expo Go app in the device

Device does not need to be connected via USB


### How to clear ios Simulator's cache


```language
% xcrun simctl erase all
```


### How to clear physical device's cache

Double click on the home button and swipe up to clear the cache

Open Expo Go app in the device and clear "Recently opened" section

Rescan the QR to load the new version

### How to clear Andorid physical device's cache

Open Expo Go app in the device and clear "Recently opened" section

### How to clear Andorid emulator's cache


Open Expo Go app in the device and clear "Recently opened" section


