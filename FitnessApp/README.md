# Fitness App - Reference and Education Only

This README provides an overview of the Fitness App project's architecture and features. This project is intended for educational purposes and serves as a reference for learning React Native development.

Lower down, a comprehensive explanation of image handing in React Native is provided.

## Project Architecture

The project structure is as follows:

-   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
-   `App.js`: The main entry point of the React Native application.
-   `app.json`: Configuration file for Expo.
-   `babel.config.js`: Configuration file for Babel, a JavaScript compiler.
-   `FitnessWorld.js`: Contains the main components and logic for the fitness app.
-   `image-loading-report.txt`: Report on image loading performance.
-   `Notes.md`: Markdown file containing project notes.
-   `package-lock.json`: Records the exact versions of dependencies used in the project.
-   `package.json`: Contains metadata about the project, including dependencies and scripts.
-   `README.md`: General information about the project.
-   `assets/`: Contains various assets used in the application.
    -   `adaptive-icon.png`: Adaptive icon for the app.
    -   `favicon.png`: Favicon for the app.
    -   `icon.png`: Icon for the app.
    -   `splash.png`: Splash screen for the app.
    -   `assets/images/`: Contains images used in the app.
        -   `cardio_blast.jpg`: Image for cardio blast workout.
        -   `cardio.jpg`: Image for cardio workout.
        -   `circuit_training.jpg`: Image for circuit training workout.
        -   `full_body_workout.jpg`: Image for full body workout.
        -   `pilate_training.jpg`: Image for pilate training workout.
        -   `strength_training.jpg`: Image for strength training workout.
        -   `yoga_flexibility.jpg`: Image for yoga flexibility workout.
        -   `yoga.jpg`: Image for yoga workout.
        -   `zumba_class.jpg`: Image for zumba class workout.

## Key Features

The Fitness App includes the following features:

-   **Workout Tracking:** Allows users to track their workouts and progress.
-   **Exercise Library:** Provides a variety of exercises with images.
-   **User Interface:** A user-friendly interface built with React Native components.

## Disclaimer

This project is for reference and educational purposes only. It is not intended for commercial use or distribution.

## License

This project has no license.



# Displaying Images in React Native: A Comprehensive Guide

This section provides a detailed explanation of how images are displayed in React Native applications, with a particular focus on the challenges associated with displaying local images on both Android and iOS platforms. It also outlines the solutions implemented in this project to address these challenges.

## General Image Display in React Native

React Native provides the `<Image>` component for displaying images. This component can render images from various sources, including:

*   **Remote URLs:** Images hosted on external servers.
*   **Local Files:** Images stored within the application's project directory.
*   **Base64 Encoded Data:** Images encoded as Base64 strings.

The `<Image>` component uses the `source` prop to specify the image source. For remote URLs, the `source` prop accepts an object with a `uri` property:

```javascript
<Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 200, height: 200 }} />
```

For local files, the `source` prop accepts the return value of a `require` statement:

```javascript
<Image source={require('./assets/images/my_image.png')} style={{ width: 200, height: 200 }} />
```

## Challenges with Local Image Display

Displaying local images in React Native presents unique challenges due to the differences in how Android and iOS handle asset management.

### Android

*   **Image Placement:** On Android, local images are typically placed in the `android/app/src/main/res/drawable-*` directories. These directories are organized by screen density (e.g., `drawable-hdpi`, `drawable-xhdpi`, `drawable-xxhdpi`).
*   **Referencing Images:** Images in the `res/drawable-*` directories can be referenced using the `require` statement. However, React Native's packager needs to be aware of these images during the build process.
*   **Image Caching:** Android's image caching mechanism can sometimes cause issues with displaying updated images.

### iOS

*   **Image Placement:** On iOS, local images are typically placed directly in the project's asset catalog or in a directory within the project.
*   **Referencing Images:** Similar to Android, images on iOS are referenced using the `require` statement.
*   **Case Sensitivity:** iOS file systems are case-sensitive, so the image file name in the `require` statement must match the actual file name exactly.

## Solutions Implemented in This Project

This project addresses the challenges of local image display using the following techniques:

*   **Centralized Image Directory:** All local images are stored in the `assets/images/` directory within the project's root. This simplifies image management and ensures consistency across platforms.
*   **`require` Statements:** Images are referenced using `require` statements, as demonstrated in the following example:

    ```javascript
    <Image source={require('./assets/images/cardio.jpg')} style={{ width: 150, height: 150 }} />
    ```

*   **Image Optimization:** Images are optimized for different screen densities to ensure optimal performance and visual quality on both Android and iOS devices.
*   **Metro Bundler Configuration:** The `metro.config.js` file is configured to correctly bundle the images during the build process. This ensures that the images are included in the final application package.
*   **Cache Busting (if needed):** If image caching becomes an issue, a cache-busting technique can be implemented by appending a version number or timestamp to the image URL. However, this has not been necessary in the current project.

## Best Practices

*   **Use a consistent image directory structure.**
*   **Optimize images for different screen densities.**
*   **Configure the Metro bundler correctly.**
*   **Test image display on both Android and iOS devices.**
*   **Be mindful of case sensitivity on iOS.**

By following these guidelines, you can ensure that local images are displayed correctly and efficiently in your React Native applications.


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







