# cph user guide

This document contains instructions on how to use this extension.

## UI explained

![Basic Usage](img/user-guide-image.png)

## Using with competitive companion

1. [Install cph](https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper)
   by following the instructions given in the link.

1. [Install competitive companion](https://github.com/jmerle/competitive-companion#readme)
   browser extension in your browser, using the instructions given in the link.

1. Open any folder in VS Code (Menu>File>Open Folder).

1. Use Companion by pressing the green plus (+) circle from the browser toolbar
   when visiting any problem page.

    ![Activate Companion](img/activate-companion.png)

1. The file opens in VS Code with testcases preloaded. Press `Ctrl+Alt+B` to run
   them. Or, use the 'Run Testcases' button from the activity bar ( in the
   bottom).

## Using with your own problems

1. Write some code in any supported language ( .cpp, .c, .rs, .python).

1. Launch the extension: Press `Ctrl+Alt+B` to run them. Or, use the 'Run
   Testcases' button from the activity bar ( in the bottom).

1. Enter your testcases in the window opened to the side.

1. Then, you can run them.

## Submit to Codeforces

1. Install [cph-submit](https://github.com/agrawal-d/cph-submit) on Firefox.

1. After installing, make sure a browser window is open.

1. Click on the 'Submit to CF' button in the results window.

1. A tab opens in the browser and the problem is submitted.

## Enviornment

-   For C++, `ONLINE_JUDGE` and `CPH` are defined as a `#define` directive.

## Customizing preferences

![Preferences](img/settings.png)

Several options are available to customize the extension. Open VS Code settings
( From the gear icon on bottom-left) and go to the
'competitive-programming-helper' section. You can choose several settings like:

-   Default save location for generated meta-data.
-   Additional compilation flags for a specific language.
-   Timeout for testcases.

## Getting help

If you have trouble using the extension, find any bugs, or want to request a new
feature, please create an issue [here](https://github.com/agrawal-d/cph/issues).
