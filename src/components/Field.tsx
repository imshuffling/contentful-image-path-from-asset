// @ts-nocheck
import React, { ReactNode, useEffect, useState } from "react";
import {
  Paragraph,
  ValidationMessage,
} from "@contentful/forma-36-react-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";
import { useField } from "../hooks/useField";

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="entry-reference-container">{children}</div>;
};

const Field = (props: FieldProps) => {
  const { sdk } = props;
  const fieldValue = sdk.field.getValue();
  const [value, setValue] = useState(fieldValue || []);

  const { imageField } = sdk.parameters.instance;
  const mediaField = useField(sdk, imageField);

  useEffect(() => {
    sdk.window.startAutoResizer();
  });

  useEffect(() => {
    sdk.entry.fields[imageField].onValueChanged((value) => {
      if (sdk.entry.fields[imageField].getValue()) {
        getImagePath();
      } else {
        setValue("");
        sdk.field.removeValue();
      }
    });
  }, [mediaField]);

  const getImagePath = async () => {
    if (sdk.entry.fields[imageField].getValue()) {
      const getPictureId = sdk.entry.fields[imageField].getValue()?.sys.id;
      const getPictureWithId = await sdk.space.getAsset(getPictureId);
      const pictureURL = getPictureWithId.fields.file["en-US"].url;

      setValue(pictureURL);
      sdk.field.removeValue();
    }
  };

  if (!mediaField) {
    return (
      <Container>
        <ValidationMessage>
          Please add a asset to generate the URL
        </ValidationMessage>
      </Container>
    );
  }

  return <Paragraph>{value}</Paragraph>;
};

export default Field;
