import { COURSES } from "@/constants/constants";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdComputer } from "react-icons/md";

export default function CourseSection() {
  return (
    <section
      id="courses"
      className="py-40 lg:py-40 w-screen min-h-screen flex flex-col gap-10 justify-center items-center"
    >
      <h1 className="text-3xl">Наши курсы</h1>

      {COURSES.map((course) => (
        <div
          key={course.title}
          className="flex flex-col gap-2 w-full md:w-4/5 p-8 md:p-0"
        >
          <h1 className="w-full flex items-center bg-secondary px-6 py-3 border border-highlight rounded-xl text-xl font-bold mb-3">
            <div className="rounded-full bg-secondary border border-highlight shadow-md mr-4 p-3">
              <HiOutlineRocketLaunch className="text-2xl" />
            </div>

            <span>{course.title}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.modules.map((module) => (
              <div
                key={module.title}
                className="p-5 bg-secondary rounded-xl border border-highlight hover:border-highlight-secondary"
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-secondary w-12 h-12 shrink-0 mr-3 border border-highlight flex items-center justify-center shadow-md">
                    <MdComputer className="text-2xl" />
                  </div>

                  <h2 className="text-lg font-bold">{module.title}</h2>
                </div>

                <div className="mt-4 text-md font-light text-secondary-text">
                  {module.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
