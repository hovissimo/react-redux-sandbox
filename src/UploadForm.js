import React from "react";
import { Formik, Form, Field } from "formik";

function uploadFileToBackend(file) {
  return Promise.resolve({ data: { status: "ok", payload: { appfileId: 6 } } });
}

const forwardEvent = (element) => (event) => {
  console.log(event);
  element.dispatchEvent({ ...event });
};

export function UploadForm() {
  const dropRef = React.useRef();
  const inputRef = React.useRef();

  React.useEffect(() => {
    const forwardToInput = forwardEvent(inputRef.current);
    const events = ["drag", "click", "drop"];
    events.forEach((eventName) =>
      dropRef.current.addEventListener(eventName, forwardToInput)
    );
    return function cleanup() {
      events.forEach((eventName) =>
        dropRef.current.removeEventListener(eventName, forwardToInput)
      );
    };
  }, [dropRef]);

  return (
    <>
      <div className="dropzone" ref={dropRef}>
        Drop it here
      </div>
      <Formik
        initialValues={{
          resume: undefined,
          files: {
            Resume: "",
          },
        }}
      >
        <Form>
          <Field name="resume">
            {({ field, form, meta }) => {
              console.log({ field });
              const { value, ...rest } = field;
              return (
                <>
                  <input
                    ref={inputRef}
                    type="file"
                    {...rest}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log("file we want to upload", file);

                      uploadFileToBackend(file).then(
                        ({
                          data: {
                            payload: { appfileId },
                          },
                        }) => {
                          form.setFieldValue(
                            "files.Resume",
                            JSON.stringify({
                              name: file.name,
                              size: file.size,
                              attachmentType: "resume",
                              type: file.type,
                              appfileId,
                            })
                          );
                        }
                      );
                      form.setFieldValue(field.name, file.name);
                    }}
                  />
                  <pre>{JSON.stringify(form.values, null, 2)}</pre>
                </>
              );
            }}
          </Field>
        </Form>
      </Formik>
    </>
  );
}

// {"name":"test.pdf","size":89635,"type":"application/pdf","appfileId":5,"attachmentType":"CoverLetter"}
