import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className=" w-3/4 mx-auto">
            <Fragment>
                <Accordion className="text-center" open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className=" text-center" onClick={() => handleOpen(1)}>
                        What is the purpose of react router?
                    </AccordionHeader>
                    <AccordionBody>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </AccordionBody>
                </Accordion>
                <Accordion className=" text-center" open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className=" text-center" onClick={() => handleOpen(2)}>
                        How does context API works?
                    </AccordionHeader>
                    <AccordionBody>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </AccordionBody>
                </Accordion>
                <Accordion className="" open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className=" text-center" onClick={() => handleOpen(3)}>
                        useRef Hook.
                    </AccordionHeader>
                    <AccordionBody>
                        <p>* The useRef Hook allows you to persist values between renders.</p>

                        <p>* It can be used to store a mutable value that does not cause a re-render when updated.</p>

                        <p>* It can be used to access a DOM element directly.</p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
}