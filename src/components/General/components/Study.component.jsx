import { Footer } from "../../index";
import { pageStyles } from "../data/styles";

const Study = () => {
  return (
    <div className={pageStyles.homeSection}>
      <div className={pageStyles.header}>
        <span className={pageStyles.title}>Study Helpers</span>
      </div>
      <div className={pageStyles.homeContent}>
        <div className={pageStyles.sectionHeader}>Fundamentals of Study</div>
        <h3>Retaining more information</h3>
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
        <h3>Understanding the programming problem</h3>
        <p>
          The best first step in solving a programming problem is to describe
          the problem to yourself. You cannot expect an adequate solution unless
          you understand the problem in your own terms.
        </p>
        <p>Ask yourself some basic questions.</p>
        <p>
          What are the big pieces of the problem? Consider the steps required to
          reach the overall solution of the task. How do the pieces fit
          together?
        </p>
        <p>
          What is the Scope of the problem? Try to identify issues that concern
          you as well as those you can ignore.
        </p>
        <p>
          What resources are available to you as the Programmer? Common
          operations are often captured in library routines. Often you can find
          examples of programs that perform similar tasks or that provide a
          certain part of your solution. Avoid doing work that has already been
          done. However, you must be aware that someone else's model for a
          solution may not be compatible with yours.{" "}
        </p>
        <p>
          What kind of input is supplied and who supplies it? Certain programs
          require uyser interaction, while others recieve input from other
          programs.
        </p>
        <p>
          How does the program demonstrate that the desired task is complete?
          The program might succeed quietly by calling other programs or by
          properly initializing a device. It could also return formatted
          results, including sophisticated charts and tables.{" "}
        </p>
        <p>
          Who will use the program? A novice user might require a simple and
          friendly interface while a sophisticated user might expect more
          features and some access to the program itself.{" "}
        </p>
        <p>
          What constraints limit the approach to the problem? Often programming
          projects must conform to strict deadlines, or the resulting
          application must be compatible with existing programs or must run
          within a limited amount of physical memory. The environment of the
          target system might also lack certain resources.{" "}
        </p>

        <p>You can also have function expressions as elements of an array</p>
        <Footer complete={false} />
      </div>
    </div>
  );
};

export default Study;
