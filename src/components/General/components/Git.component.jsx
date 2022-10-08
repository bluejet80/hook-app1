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
        <p className="highlight">git config credential.helper store</p>
        <p>
          Then once again enter your username and password and it will be saved
          from them on. If your remote token expires you will need to do this
          process over again.
        </p>

        <Footer complete={true} />
      </div>
    </div>
  );
};

export default Git;
