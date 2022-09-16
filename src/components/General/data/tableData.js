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
  ["a-x describe-function", "Get info on function"],
];

export const emacsPack1 = [
  ["package-refresh-contents", "Refresh Package List"],
  ["try [return] <package name>", "try a package out"],
  ["describe-package [return] <package name>", "Get info on a package"],
  ["a-x <type package name>", "Do this to find commands related to package"],
];

export const orgRoam1 = [
  ["c-c n f", "creates a new node, or finds already made node"],
  ["c-c n i", "links nodes to nodes within the node"],
  ["c-c c-c", "save the node after you create it the first time"],
  ["c-c n l", "brings up org-roam-buffer"],
  ["c-c c-l", "add a link"],
  ["org-roam-db-build-cache", "Reload the database"],
  ["org-roam-update-org-id-locations", "update the database"],
  ["crux-delete-org-id-locations", "delets a node, access it with a-x"],
];

export const emacsTable6 = [
  ["c-x b", "show open buffers"],
  ["c-x k", "kill buffer"],
  ["c-x c-f", "emacs find"],
  ["c-x c-s", "writes current buffer"],
];

export const slimeTable1 = [
  ["a-x slime", "To start Slime"],
  ["sayoonara", "To exit the Slime env type comma, then enter the word "],
  ["c-Return", "close any unmatched parenthesis"],
  ["c-j", "begin new line and indent"],
  ["c-c c-b", "Interrupt lisp process"],
  ["c-c a-o", "clear entire buffer"],
  ["c-c c-c", "recompile at point"],
  ["c-c c-k", "recompile whole buffer"],
];

export const regexTable1 = [
  [
    "[xyz][a-c]",
    "A character class. matches any one of the enclosed characters",
  ],
  [
    "[^abc][^a-c]",
    "This is a negated character class. That is, it matches anything that is not enclosed in the brackets",
  ],
  ["\\d", "Matches any digit. Equivalent to [0-9]"],
  ["\\D", "Matches any character that is not a digit."],
  [
    "\\w",
    "Matches any alphanumeric character from the alphabet, including underscore.",
  ],
  ["\\W", "Matches any character that is not a word character."],
  ["\\s", "Matches a single white space character"],
  ["\\S", "Matches a single character other than white space."],
  ["\\t", "Matches a horizontal tab"],
  ["\\r", "Matches a carriage return"],
  ["\\b", "This is what is called a word boundary"],
  ["x|y", "This is called a disjunction, it mathces this or that character."],
  ["^", "Matches the beginning of an input"],
  ["$", "Matches the end of an input"],
  [
    "x(?=y)",
    "This is called a lookahead assertion. It matches x only if x is followed by a y",
  ],
  [
    "x(?!y)",
    "This is called a negative lookahead. Matches x only if it is not followed by a y",
  ],
  [
    "(?<=y)x",
    "This is called a Lookbehind assertion. Matches x only if x is preceded by a y",
  ],
  ["(?<!y)x", "This is of course the opposite of the previous assertion."],
  ["x*", "Matches the preceding item x 0 or more times."],
  ["x+", "Matches the preceding item x 1 or more times."],
  [
    "x?",
    "Matches the preceding item x 0 or 1 times. For example: /e?le?/ matches the el in angel and then le in angle.",
  ],
  [
    "x{n}",
    "Where n is an integer, matches exactly n occurances of the preceding item x",
  ],
  [
    "x{n,}",
    "Where n is an integer, matches at least n occurances of the preceding item x",
  ],
  [
    ".",
    "This has one of the following meanings: matches any single character except line terminators. Or, inside a character class, the dot loses its special meaning and matches a literal dot.",
  ],
  [
    "(x)",
    "This is a capture group and then in substitution you would use /1 to reference the first capture group.",
  ],
];

export const regexTable2 = [
  ["^", "This matches the beginning of a line"],
  ["&", "matched pattern to be used in substitution."],
  [".", "matches a single character"],
];
