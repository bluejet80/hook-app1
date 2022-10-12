import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Git = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Git Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Git config</div>
        <p>
          Setup author name and mail to be used for all commits in current
          repository. Normally the --global flag is used to set config options
          for current user.
        </p>
        <p className="highlight">git config --global user.name "username"</p>
        <p className="highlight">
          git config --global user.email "user@example.com"
        </p>

        <div className={pageStyles.sectionHeader}>Git Clone</div>
        <p>Clone the remote repository with HTTPs or with SSH</p>
        <p className="highlight">git clone (repo url)</p>
        <div className={pageStyles.sectionHeader}>Create remote repo</div>
        <p>
          First creae a new repo on Github. Then copy the link to the remote
          repo. Then initialize the repository in your project directory.
        </p>
        <p className="highlight">git init</p>
        <p>
          Then Link the newly created github repo to your local project repo.
        </p>
        <p className="highlight">git remote add origin (link to repo)</p>
        <p>Then do a pull to get the README.md file.</p>
        <p className="highlight">git pull origin master</p>
        <div className={pageStyles.sectionHeader}>Git Branches</div>
        <p>
          To create a branch off of the branch that you are currently on type:
        </p>
        <p className="highlight">git branch new-branch-name</p>
        <p>To delete a branch type</p>
        <p className="highlight">
          git branch -d branch-name (or -D to force a delete)
        </p>
        <p>To display all local and remote-tracking branches type</p>
        <p className="highlight">git branch -a</p>

        <h3>Switching Branches</h3>
        <p>
          To switch branches you will use the checkout command. This command can
          do other things as well like create new branches
        </p>
        <p className="highlight">git checkout branch-name</p>
        <p>
          To create a new branch off of the current branch and switch to that
          branch type:
        </p>
        <p className="highlight">git checkout -b branch-name</p>
        <div className={pageStyles.sectionHeader}>Git Commits</div>
        <p>
          You begin a commit by first adding all the changed files to the
          commit.
        </p>
        <p className="highlight">git add .</p>
        <p>
          The period adds all the changed files to your commit. Then you can
          create the commit by typing.
        </p>
        <p className="highlight">git commit -m "commit message"</p>
        <p>
          Now you are ready to push the changes up to the remote repo(Github) by
          typing
        </p>
        <p className="highlight">git push origin master</p>
        <p>
          The "master" can be whatever branch that you are wanting to push to.
        </p>
        <p>Similiarly you can combine the two first commands by typing.</p>
        <p className="highlight">git commit -a -m "commit message"</p>
        <p>
          If you want to commit only certain files you can type. First you need
          to see what files have been changed. You do this by running:
        </p>
        <p className="highligh">git status</p>
        <p>Then you can only commit certain files by doing this</p>
        <p className="highlight">git add (file1) (file2)</p>
        <p>Then you just do a commit as normal after that.</p>

        <div className={pageStyles.sectionHeader}>Show history of commits</div>
        <p>
          To get information about the commits that you have done just type:
        </p>
        <p className="highlight">git log</p>
        <p>The prefered shorter version of the command above is this:</p>
        <p className="highlight">git log --oneline</p>
        <p>
          After running this you get a nice consice list of all the commits and
          their respective hashes. All you need.
        </p>
        <p>
          To see a graph of the merges that you have made with your commits just
          type:
        </p>
        <p className="highlight">git log --graph</p>

        <div className={pageStyles.sectionHeader}>Git Reset</div>
        <p>
          Git reset is used to unstage files or remove commits. It does so by
          changing what the tip of the branch (HEAD) points to.
        </p>
        <p>There are three reset modes: --soft, --mixed(default), --hard</p>
        <p>To undo changes of a file or a staging,you would do:</p>
        <p className="highlight">git add .</p>
        <p className="highlight">git reset -- file (unstage a single file)</p>
        <p className="highlight">git reset (unstage all)</p>
        <p>Then you type this to undo changes to the file</p>
        <p className="highlight">git restore (file)</p>
        <p>
          If you wish to undo the most recent commit, then you woul do this:
        </p>
        <p className="highlight">git commit -a -m "commit message"</p>
        <p className="highlight">git reset --soft HEAD^</p>
        <p className="highlight">git commit -a -m "new commit message"</p>
        <p>To undo a commit permanently:</p>
        <p className="highlight">
          git reset --hard HEAD~2(destroys the last two commits, HEAD and HEAD^)
        </p>
        <div className={pageStyles.sectionHeader}>Git Stash</div>
        <p>
          Stashing allows you to save your curent unstages changes and bring
          your branch back to an unmodified state. When you stash, your changes
          are pushed onto a stack. This is really useful if you need to switch
          to another branch whithout having to commit your incomplete changes.
        </p>
        <p className="highlight">git stash (stash your unstaged changes)</p>
        <p className="highlight">git stash pop (unstash your changes)</p>
        <p className="highlight">git stash drop (drops your stashed changes)</p>
        <p className="highlight">git stash push file (stash a single file)</p>
        <p className="highlight">
          git stash -m "message" (add a message to your stash)
        </p>
        <div className={pageStyles.sectionHeader}>Saving Password Locally</div>
        <p>
          To not have to type in your appsword every time you do a push you can
          use the Credential helper to store your passowrd locally. Note: Your
          passowrd is stored unencrypted.
        </p>
        <p className="highlight">
          git config --global credential.helper 'store --file ~/.my-credentials'
        </p>
        <p>
          Then once again enter your username and password and it will be saved
          from them on. If your remote token expires you will need to do this
          process over again.
        </p>
        <div className={pageStyles.sectionHeader}>Git Merge Conflicts</div>
        <p>
          With git merge conflicts it alters the file and adds annotations to
          the file where the conflicts are specifically at. Then, using those
          annotations you can figure out what you wish to keep in the file and
          what needs to be deleted. Alter the file accordingly and then
          re-commit your changes and then push to GitHub.
        </p>
        <p>
          To prevent merge conflicts it is better to ;checkout a new branch
          first if you know the files that you have are different from those up
          on github. Then you can push that branch up to github and issue a pull
          request once you fix the differences between the branches.
        </p>
        <p>It is much easier to undo a pull request, than to undo a commit.</p>
        <div className={pageStyles.sectionHeader}>Undoing a Commit</div>
        <p>
          So when I messed everything up, on github I went to the commits and
          then chose the commit that I wanted to return to. On that commit there
          is a button that will copy the hash of that commit. So I copied it and
          then ran this command on my machine.
        </p>
        <p className="highlight">git revert HASH</p>
        <p>
          Then it told me there were conflicts so i opened VSCode and inside the
          file were annotations showing the conflicts and so I removed the
          things I didnt want and then saved the file. Then commited those
          changes and pushed it back to github.
        </p>

        <div className={pageStyles.sectionHeader}>Undoing a Commit</div>
        <p className="highlight">git commit -a</p>
        <p>
          This command does a git add . and a git commit all in one command. It
          then automatically brings up the commit template for you to add notes
          to it as well.
        </p>
        <p className="highlight">git diff HEAD</p>
        <p>
          This command will show you the differences between your current file
          and the one you are trying to merge. You can either run the command
          without the HEAD or you can put a specific HASH in aswell.
        </p>
        <div className={pageStyles.sectionHeader}>Web Links</div>
        <p>
          <a
            href="https://dzone.com/articles/7-tips-of-searching-github-repositories-you-should"
            target="blank"
          >
            Searching Github Repositories
          </a>
        </p>
        <p>
          <a href="https://profy.dev/project/github-minesweeper" target="blank">
            Learn Git and Github w help from a bot
          </a>
        </p>
        <p>
          <a
            href="https://dev.to/sourcegraph/sourcegraph-code-search-the-developers-treasure-trove-3ach"
            target="blank"
          >
            Searching for code to refactor
          </a>
        </p>
        <p>
          <a
            href="https://dev.to/olanetsoft/10-github-repositories-you-should-know-as-a-developer-4l0p"
            target="blank"
          >
            Git hub repositories for Developers
          </a>
        </p>

        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Git;
