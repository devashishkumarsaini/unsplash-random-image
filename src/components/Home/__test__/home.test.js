import React from "react";
import Home from '../home';
import { fireEvent, queryByTestId, render, waitFor, screen, getByText } from "@testing-library/react";
import store from "../../../state/index";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

test("HOME PAGE RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("home-page")).toBeTruthy();
})

test("START BUTTON RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("start-button")).toHaveTextContent('Start');
})

// test("REDIRECT ON BUTTON CLICK", async () => {
//     const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
//     fireEvent.click(queryByTestId('start-button'));
//     await waitFor(() => screen.findByTestId('random-img-page'), { timeout: 100000 });
//     expect(getByTestId('random-img-page')).toBeTruthy();


// })

