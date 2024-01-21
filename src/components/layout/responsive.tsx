"use client";
import React, { ReactNode, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [isDesktop, setDesktop] = React.useState(false);
  const desktop = useMediaQuery({ minWidth: 481 });
  useEffect(() => {
    setDesktop(desktop);
  }, [desktop]);

  return isDesktop ? children : null;
};
const Tablet = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [isTablet, setDesktop] = React.useState(false);
  const tablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  useEffect(() => {
    setDesktop(tablet);
  }, [tablet]);
  return isTablet ? children : null;
};
const Mobile = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [isMobile, setDesktop] = React.useState(false);
  const mobile = useMediaQuery({ maxWidth: 480 });
  useEffect(() => {
    setDesktop(mobile);
  }, [mobile]);
  return isMobile ? children : null;
};
const Default = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export { Desktop, Tablet, Mobile, Default };
