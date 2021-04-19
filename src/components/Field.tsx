// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  TextInput,
  Button,
  Flex,
  HelpText,
} from "@contentful/forma-36-react-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  const fieldValue = props.sdk.field.getValue();
  const [value, setValue] = useState(fieldValue || []);

  const { fieldDescription, imageField } = props.sdk.parameters.instance;

  useEffect(() => {
    props.sdk.window.startAutoResizer();
  });

  const onExternalChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    const detachValueChangeHandler = props.sdk.field.onValueChanged(
      onExternalChange
    );
    return detachValueChangeHandler;
  });

  const handleCalc = async () => {
    if (props.sdk.entry.fields[imageField].getValue() !== undefined) {
      const getPictureId = props.sdk.entry.fields[imageField].getValue().sys.id;
      const getPictureWithId = await props.sdk.space.getAsset(getPictureId);
      const pictureURL = getPictureWithId.fields.file["en-US"].url;

      onChange({
        currentTarget: {
          value: pictureURL,
        },
      });
    } else {
      onChange({
        currentTarget: {
          value: "",
        },
      });
    }
  };

  const onChange = (e) => {
    const value = e.currentTarget.value;
    setValue(value);
    if (value) {
      props.sdk.field.setValue(value);
    } else {
      props.sdk.field.removeValue();
    }
  };

  function emptyField() {
    props.sdk.field.setValue("");
    // sdk.field.removeValue();
    setValue("");
  }

  console.log(value);

  return (
    <div>
      <Flex className="container" style={{ marginBottom: 5 }}>
        <TextInput
          width="large"
          type="text"
          id="total-duration"
          testId="total-duration"
          value={value}
          onChange={onChange}
          disabled
          className="input-total-duration"
          style={{ marginRight: 10 }}
        />

        {value === undefined ? (
          <Button
            className="action-button"
            buttonType="primary"
            onClick={handleCalc}
          >
            Generate
          </Button>
        ) : (
          <Button
            buttonType="negative"
            onClick={() => {
              emptyField();
            }}
          >
            Remove
          </Button>
        )}
      </Flex>
      <HelpText>
        {fieldDescription ||
          "Click generate to get the image path from the relevant field"}
      </HelpText>
    </div>
  );
};

export default Field;
