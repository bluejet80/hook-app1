export const emacsInit1 = `
(load  "~/quicklisp/slime-helper.el")
;; Replace "sbcl" with the path to your implementation
(setq inferior-lisp-program "sbcl")

;; user interface
(setq inhibit-startup-message t)
(scroll-bar-mode -1)
(tool-bar-mode -1)
(tooltip-mode -1)
(set-fringe-mode 10)

;; syntax checker
(use-package flycheck
  :ensure t
  :init
  (global-flycheck-mode t))

;; set visual bell
(setq visible-bell t)


;;mode bar
(display-time-mode)
(load-theme 'deeper-blue)


;; package repos
(require 'package)
(setq package-archives  '(("melpa" . "https://melpa.org/packages/")
                          ("org" . "https://orgmode.org/elpa/")
                         ("elpa" . "http://elpa.gnu.org/packages/")))

(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

(unless (package-installed-p 'use-package)
  (package-refresh-contents)
  (package-install 'use-package))

(require 'use-package)
(setq use-package-always-ensure t)

;; Make ESC quit prompts
(global-set-key (kbd "<escape>") 'keyboard-escape-quit)

;; Printing stuff

;;(setq printer-name 'C:\\Users\\Jarett\\Desktop\\network_printer.lnk')


;; Ivy, Counsel, Swiper stuff

(use-package counsel)
(use-package swiper)

(use-package ivy
  :diminish
  :bind (("C-s" . swiper)
         :map ivy-minibuffer-map
         ("TAB" . ivy-alt-done)
	 ("C-l" . ivy-alt-done)
	 ("C-j" . ivy-next-line)
	 ("C-k" . ivy-previous-line)
	 :map ivy-switch-buffer-map
	 ("C-k" . ivy-previous-line)
	 ("C-l" . ivy-done)
	 ("C-d" . ivy-switch-buffer-kill)
	 :map ivy-reverse-i-search-map
	 ("C-k" . ivy-previous-line)
	 ("C-d" . ivy-reverse-i-search-kill))
  :config
  (ivy-mode 1))

;package try
(use-package try
  :ensure t)


;; linux shell 
(use-package eshell-toggle
  :ensure t)

(winner-mode 1)

;; misc utilities
(use-package crux
  :ensure t)

;; Org-mode Stuff
(use-package org
  :ensure t)
(use-package org-bullets
  :ensure t
  :config
  (add-hook 'org-mode-hook (lambda () (org-bullets-mode 1))))

(use-package org-roam
  :ensure t
  :init
  (setq org-roam-v2-ack t)
  :custom
  (org-roam-directory "~/org_roam_files")
  (org-roam-completion-everywhere t)
  
  :bind (("C-c n l" . org-roam-buffer-toggle)
	 ("C-c n f" . org-roam-node-find)
	 ("C-c n i" . org-roam-node-insert)
	 :map org-mode-map
	 ("C-M-i" . completion-at-point))

  :config
  (org-roam-setup))
;; Navigation stuff
(defalias 'list-buffers 'ibuffer)

;; TODO Functionality
(setq org-log-done 'time)
;; Agenda Key-bindings
(define-key global-map "\C-cl" 'org-store-link)
(define-key global-map "\C-ca" 'org-agenda)
(setq org-agenda-files (list "~/org_agenda/bruce.org"
			     "~/org_agenda/programming.org"
			     "~/org_agenda/home.org"
			     "~/org_agenda/work.org"))


(defvar org-export-output-directory-prefix "export_" "prefix of directory used for org-mode export")

    (defadvice org-export-output-file-name (before org-add-export-dir activate)
      "Modifies org-export to place exported files in a different directory"
      (when (not pub-dir)
          (setq pub-dir (concat org-export-output-directory-prefix (substring extension 1)))
          (when (not (file-directory-p pub-dir))
           (make-directory pub-dir))))


(defun my-write-copy-to-file ()
  "Write a copy of the current buffer or region to a file."
  (interactive)
  (let* ((curr (buffer-file-name))
         (new (read-file-name
               "Copy to file: " nil nil nil
               (and curr (file-name-nondirectory curr))))
         (mustbenew (if (and curr (file-equal-p new curr)) 'excl t)))
    (if (use-region-p)
        (write-region (region-beginning) (region-end) new nil nil nil mustbenew)
      (save-restriction
        (widen)
        (write-region (point-min) (point-max) new nil nil nil mustbenew)))))

(global-set-key (kbd "C-c w") 'my-write-copy-to-file)


(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(ansi-color-faces-vector
   [default default default italic underline success warning error])
 '(ansi-color-names-vector
   ["#242424" "#e5786d" "#95e454" "#cae682" "#8ac6f2" "#333366" "#ccaa8f" "#f6f3e8"])
 '(custom-enabled-themes '(light-blue))
 '(org-publish-project-alist nil)
 '(package-selected-packages
   '(gnu-elpa gnu-elpa-keyring-update lsp-ivy lsp-treemacs helm helm-lsp dap-mode lsp-java lsp-ui company hydra lsp-mode yasnippet projectile which-key use-package try org org-roam org-bullets flycheck eshell-toggle doom-modeline crux counsel command-log-mode)))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(counsel--mark-ring-highlight ((t (:inherit highlight)))))

`;
