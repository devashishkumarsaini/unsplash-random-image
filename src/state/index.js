import { applyMiddleware, compose, createStore } from "redux";
import getImageReducer from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { watcherGetImage, watcherLikeImage, watcherResetAllState, watcherDislikeImage, watcherFinishImage } from "./sagas/saga";

export const initialState = {
    totalLike: 0,
    totalDislike: 0,
    finish: false,
    image: {
        url: '',
        error: false,
        like: false,
        dislike: false,
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    getImageReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(watcherGetImage);
sagaMiddleware.run(watcherLikeImage);
sagaMiddleware.run(watcherDislikeImage);
sagaMiddleware.run(watcherFinishImage);
sagaMiddleware.run(watcherResetAllState);

export default store;