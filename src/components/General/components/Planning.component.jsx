import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Planning = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>App Planning Information</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>
          Brainstorming an Application
        </div>
        <h3>Retaining more Information</h3>
        <p>
          Write down and grasp key points in the lecture. Then immediately
          after, skim over your notes and maybe build something of your own that
          includes the ideas and concepts that you just learned. Make sure to
          spend at least 15-20 minutes reviewing what you learned in the
          lecture.
        </p>
        <h3>Understanding the code that was used</h3>
        <p>
          Refactor it, Change the UI and the colors, make it your own so that
          you really understand how all the elements relate to each other.
          Create a clone of the projects that you just did, but do it from
          scratch.
        </p>
        <h3>Creating good psudo code</h3>
        <p>Make sure there is one line for each action.</p>
        <h3>Understanding a Programming Problem</h3>
        <p>
          The best first step in solving a programming problem is to describe
          the problem to yourself. You cannot expect an adequate solution unless
          you understand the problem in your own terms. Ask yourself some basic
          questions:
        </p>
        <h4>What needs to be done?</h4>
        <p>Describe the general goals that the program mush achieve.</p>
        <h4>What are the big pieces of the problem?</h4>
        <p>
          Consider the steps required to reach the overall solution of the task.
          How do the pieces fit together?
        </p>
        <h4>What is the scope of the problem?</h4>
        <p>
          Try to identify issues that concern you as well as those you can
          ignore.
        </p>
        <h4>What resources are available to you as a programmer</h4>
        <p>
          Common operations are often captured in library routines. Often you
          can find examples of programs that perform similar tasks or that
          provide a certain part of your solution. Avoid doing work that has
          already been done. However, you must be aware that someone else's
          model for a solution may not be compatible with yours.{" "}
        </p>
        <h4>What kind of input is supplied and who supplies it</h4>
        <p>
          Certain programs require user interaction, while others recieve input
          from other programs.{" "}
        </p>
        <h4>
          How does the program demonstrate that the desired task is complete?
        </h4>
        <p>
          The program might succeed quietly by calling other programs or by
          properly initializing a device. It could also return formatted
          results, including sophisticated charts and tables.
        </p>
        <h4>Who will use the program?</h4>
        <p>
          A novice user might require a simple and friendly interface while a
          sophisticated user might expect more features and some access to the
          program itself.
        </p>
        <h4>What constraints limit the apporach to the problem?</h4>
        <p>
          Often programming projects must conform to strict deadlines, or the
          resulting application must be compatible with existing programs or
          must run within a limited amount of physical memory. The environment
          of the target system might also lack certain resources.
        </p>
        <div className={pageStyles.sectionHeader}>
          Creating a Project Flowchart
        </div>
        <p>
          There is a great website that allows you to create a flow chart for
          your project it is here:{" "}
          <a href="https://app.diagrams.net/">Diagrams.net website</a>
        </p>
        <p>
          From here I want to also have links to the various worksheet PDFs that
          I have made.
        </p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Planning;
