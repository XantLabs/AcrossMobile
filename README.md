# Across
## XantLab - React Native application

**CodeBrew 2017 Entry**

### Preface
See `README_crna.md` for the *create_react_native_application* boilerplate README created by Facebook. This project has been **ejected** out of Facebook's boilerplate code to utilize some native system libraries (namely the Camera API). It can be used without native system libraries if relied upon Expo, however that was not enough for our uses.

## Installation (Development)

1. Follow [React Native's official requirements guide](https://facebook.github.io/react-native/docs/getting-started.html) to install all the requirements needed to build the application.

    **NOTE:** You don't have to init a new project as that has already been done, just install the dependencies.

2. Run `npm install` in the directory.
3. Run `react-native start` in a new terminal to start the React Native live-reloading server.
4. Run `react-native run-android` with either an Android Virtual Device started or with an Android phone plugged in (and connected to ADB).

## Building

### Android

1. Follow [React Native's official Android building guide](https://facebook.github.io/react-native/docs/signed-apk-android.html) to build the signed apk.

    **NOTE:** The apk **must** be signed to be installed on a device (even on development devices). With an unsigned apk, the installation process will fail.

### iOS

1. Untested.