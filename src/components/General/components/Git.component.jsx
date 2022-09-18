import { Footer } from "../../index";

const Git = () => {
  return (
    <div className="home-section color11">
      <div className="header color5">
        <span className="title">Git Information</span>
      </div>
      <div className="home-content white-text">
        <div className="section-header">Git config</div>
        <p>
          Setup author name and mail to be used for all commits in current
          repository. Normally the --global flag is used to set config options
          for current user.
        </p>
        <p className="highlight">git config --global user.name "username"</p>
        <p className="highlight">
          git config --global user.email "user@example.com"
        </p>

        <div className="section-header">Git Clone</div>
        <p>Clone the remote repository with HTTPs or with SSH</p>
        <p className="highlight">git clone (repo url)</p>
        <div className="section-header">Create remote repo</div>
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
        <div className="section-header">Git Commits</div>
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
          {" "}
          The "master" can be whatever branch that you are wanting to push to.
        </p>
        <p>Similiarly you can combine the two first commands by typing.</p>
        <p className="highlight">git commit -a -m "commit message"</p>
        <p>If you want to commit only certain files you can type</p>
        <div className="section-header">Show history of commits</div>

        <div className="section-header">Saving Password Locally</div>
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

        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Git;
