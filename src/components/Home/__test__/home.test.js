import React from "react";
import Home from '../home';
import { render, fireEvent, waitFor, screen, prettyDOM, findByText, queryByTestId, findByTestId, } from "@testing-library/react";
import store from "../../../state/index";
import { Provider } from "react-redux";
import { Route, StaticRouter } from "react-router-dom";

test("HOME PAGE RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("home-page")).toBeTruthy();
})

test("START BUTTON RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("start-button")).toHaveTextContent('Start');
})

test("REDIRECT ON BUTTON CLICK", async () => {
    const div = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    fireEvent.click(div.getByTestId('start-button'), { button: 0 });
    await waitFor(() => { console.log(window.location.pathname) });
})

