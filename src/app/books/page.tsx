import PageLayout from "../../utils/Pagelayout";
import Image from "next/image";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div>
      <section>
        <PageLayout
          title="Books Authored by KOA Member"
          description="Books page..."
        />
      </section>{" "}
      <div className="m-20 flex justify-center items-center">
        <div className="grid grid-col-1 md:grid-cols-2 gap-2">
          <Image
            className="ml-50"
            src="/book/book1.jpg"
            alt="book1"
            width={300}
            height={250}
          />

          <div className="">
            <div className="">
              {" "}
              <h1 className=" text-3xl bold line-space-2 font-bold">
                Posterior Approaches to the Hip Joint
              </h1>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Author: Dr. K. Mohan Iyer
              </h2>
              <h2 className="mb-2 bold text-bold">ISBN : 978-93-92892-12-7</h2>
              <h2 className="mb-2">Pages : 402 (Hardcover)</h2>
              <div>
                <p className="text-justify text-xl">
                  There are more than 100 described approaches to the Hip Joint
                  in literature. “Posterior Approaches to the Hip Joint” is the
                  only up-to-date book written solely on this particular
                  subject. It has been compiled neatly and systematically,
                  starting with Anatomy of the Hip Joint with special emphasis
                  to its Posterior aspect, including Ultrasound and Sports
                  injuries. The next chapter is focused on Biomechanics of the
                  Hip Joint with special emphasis on its Posterior aspect,
                  including the joint reaction forces and commonly used
                  assistive devices of Total Hip Replacement.
                </p>
                <p className="text-justify text-xl">
                  The book also covers the patient positioning and setup using
                  excellent demonstrations with original photographs taken for
                  this book and not discussed in other books. The following
                  chapters discuss in depth the various new and original
                  modifications to the posterior approach of the hip .Including
                  the minimally invasive and two incision approaches.{" "}
                </p>
                <p className="text-justify text-xl">
                  The book doesn’t only explain the approaches, but it also
                  demonstrates various repair techniques including the
                  tranosseous repair. It even goes further to the postoperative
                  rehabilitation particularly in relation to the posterior
                  approach to the hip joint. Some chapter moves on to
                  concentrate on the latest evolutions, namely Arthroscopic and
                  robotic surgery and their role in the treatment of the
                  Posterior compartment of the Hip.
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-10">
              <Link className="btn btn-primary border-none " href="#">
                Buy on BOHR
              </Link>
              <Link className="btn btn-primary border-none " href="#">
                Buy on Amazon
              </Link>
              <Link className="btn btn-primary border-none " href="#">
                Buy on Flipkart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="m-20 flex justify-center items-center">
          <div className="grid grid-col-1 md:grid-cols-2 gap-2">
            <Image
              className="ml-50"
              src="/book/book2.jpg"
              alt="book1"
              width={300}
              height={250}
            />

            <div className="">
              <div className="">
                {" "}
                <h1 className=" text-3xl bold line-space-2 font-bold">
                  Concise Textbook Of Orthopaedics - CBME Textbook For MBBS
                </h1>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Author : Dr Prasanna T Y <br />
                  Co-editor: Dr Nataraj A R
                </h2>
                <h2 className="mb-2 bold text-bold">
                  ISBN : 978-93-5782-985-4
                </h2>
                <h2 className="mb-2">Pages : 276 (Hardcover)</h2>
                <div>
                  <p className="text-justify text-xl">
                    CONCISE TEXTBOOK OF ORTHOPAEDICS CBME is strictly prepared
                    according to new Orthopedic CBME curriculum for an Indian
                    Medical Graduate. It is authored by Dr Prasanna T Y and
                    co-edited by Dr Nataraj A R. The book is easy to understand,
                    concise, yet full of necessary information. The text is
                    supplemented with a number of easily reproducible color
                    diagrams providing a photogenic memory to the student.
                  </p>
                  <p className="text-justify text-xl">
                    It contains over 100 free-line diagrams, 60 X-rays and 60
                    clinical photographs of common disorders. Practical
                    procedures have been discussed under relevant chapters. Thus
                    it is a complete comprehensive textbook for final year MBBS
                    students and for PG preparation.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <Link className="btn btn-primary border-none " href="#">
                  Buy on Amazon -Kindle
                </Link>
                <Link className="btn btn-primary border-none " href="#">
                  Buy on Amazon -Hard Copy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="m-20 flex justify-center items-center">
          <div className="grid grid-col-1 md:grid-cols-2 gap-2">
            <Image
              className="ml-50"
              src="/book/book3.jpg"
              alt="book1"
              width={300}
              height={250}
            />

            <div className="">
              <div className="">
                {" "}
                <h1 className=" text-3xl bold line-space-2 font-bold">
                  Textbook of Orthopaedics
                </h1>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Author : Edward L Nazareth & Jacob K. Ipe
                </h2>
                <h2 className="mb-2 bold text-bold">
                  ISBN - 10 : 9354663842
                  <br />
                  ISBN - 13 : 978-9354663840
                </h2>
                <h2 className="mb-2">Pages : 592</h2>
                <div>
                  <p className="text-justify text-xl">
                    Orthopaedic surgery is one of the fast developing branches
                    of medicine and many of the concepts of management change
                    regularly. A book on the up-to-date concepts of diagnosis
                    and management of orthopaedic trauma and diseases is
                    essential even for undergraduate Students.
                  </p>
                  <p className="text-justify text-xl">
                    As the National Medical Commission (NMC) has introduced
                    ‘Competency Based Medical Education’ in undergraduate
                    teachings, a book that fulfils the topics and competencies
                    prescribed by NMC with the mode
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <Link className="btn btn-primary border-none " href="#">
                  Buy on Amazon -Kindle
                </Link>
                <Link className="btn btn-primary border-none " href="#">
                  Buy on Amazon - Hard Copy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
