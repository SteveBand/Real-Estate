import React from "react";
import { DashboardStyle } from "../styles/DashboardStyle";
import { Header } from "../components/Header";
import { OptionsBar } from "../styles/components/OptionsBar";
import { Content } from "../components/Content";

export function Dashboard() {
  return (
    <DashboardStyle>
      <Header />
      <section className="content">
        <OptionsBar />
        <Content />
      </section>
    </DashboardStyle>
  );
}
