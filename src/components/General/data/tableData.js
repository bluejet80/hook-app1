export const sandrepVim = [
  [":%s/\\s._*//g", "delete all the space inbetween words on whole file"],
  [':%s/global./\\"/g', 'replace the string "global." with a quote'],
];

export const emacsTable1 = [
  [
    "a-u",
    "To make a word Capitalized, position th ecursor at the beginning of the word.",
  ],
  ["a-q", "To turn a long line into a paragraph"],
  ["a-w", "To copy/yank text"],
  ["c-y", "To paste text"],
  ["c-w", "To cut text"],
];

export const emacsTable2 = [
  ["c-a", "Beginning of the line"],
  ["c-e", "End of the line"],
  ["c-p", "Up one line"],
  ["c-n", "Down one line"],
  ["a-e a-a", "Move up and down by paragraph"],
  ["a-f a-b", "Forward and Back by words"],
  ["c-l", "Center cursor on page"],
];

export const emacsTable3 = [
  ["c-x c-+", "To make text bigger"],
  ["c-x c--", "To make text smaller"],
];

export const emacsTable4 = [
  ["c-x o", "Switch between buffer windows"],
  ["c-x 1", "Close all other windows except the one you are on"],
  ["c-x 0", "Close the buffer that you are on"],
  ["c-x 2", "Split the window horizontally"],
  ["c-x 3", "Split the window vertically"],
  ["c-c w", "Save as a new file"],
  ["c-c left", "Winner-mode to undo a change in the buffer"],
  ["c-x h", "Select all the text in the buffer"],
  ["a-x", "To run commands"],
  ["c-s", "To search buffer"],
  ["c-r", "Reverse Search"],
];

export const emacstable5 = [
  ["c-h f", "Look for help on a function"],
  ["c-h m", "Show available commands for current mode"],
  ["c-h v", "Help related to variables"],
  ["c-h k", "To find which function is bound to a key"],
  ["c-h w", "To see which key bindings are defined for a given function"],
  ["c-h ?", "To see whether other options are available"],
];

export const emacsPack1 = [
  ["package-refresh-contents", "Refresh Package List"],
  ["try [return] <package name>", "try a package out"],
  ["describe-package [return] <package name>", "Get info on a package"],
  ["a-x <type package name>", "Do this to find commands related to package"],
];
