"use client";
import { Button } from "@mui/material";
import React from "react";



function withSharedLogic(WrappedComponent: any) {
  return function EnhancedComponent(props: any) {
    // 중복 로직
    const sharedFunction = () => {
      console.log("Shared logic");
    };
    const test = () => {
      props.customOnChange();
      console.log("@@@");
    };
    return (
      <>
        <Button title="test" onClick={test}>
          {"asd"}
        </Button>
        <WrappedComponent sharedFunction={sharedFunction} {...props} />
      </>
    );
  };
}

function ComponentA(props: any) {
  const customOnChange = (e: any) => {
    console.log("ComponentA specific logic");
  };

  return <div>Additional content for ComponentA</div>;
}

function ComponentB(props: any) {
  const customOnChange = (e: any) => {
    console.log("ComponentB specific logic");
  };

  return <div>Additional content for ComponentB</div>;
}

export const EnhancedComponentA = withSharedLogic(ComponentA);
export const EnhancedComponentB = withSharedLogic(ComponentB);

export default withSharedLogic;
