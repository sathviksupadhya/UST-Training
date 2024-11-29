import { Fragment } from "react";
// import Display from "./components/Display";
// import Color from "./components/Color";
// import Person from "./components/Person";
// import ColorObjectArray from "./components/FruitObjectArray";
// import FruitObjectArray from "./components/FruitObjectArray";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ActorList from "./components/actor/ActorList";
// import ProductList from "./components/product/ProductList";
// import ButtonClick from "./components/ButtonClick";
import Counter from "./Component/Counter";
// import PersonClick from "./components/PersonClick";
// import MovieName from "./components/MovieName";
// import InputDemo from "./components/InputDemo";
 import EcomList from "./Component/EcomList";
// import EcomAdd from "./components/ecommerce/EcomAdd";
// import EcomEdit from "./components/ecommerce/EcomEdit";
// import EcomAddValidation from "./components/ecommerce/EcomAddValidation";
// import EcomAddValidationRef from "./components/ecommerce/EcomAddValidationRef";
import TodoList from "./Component/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Component/Error";
import VenueList from "./Component/training/venue/VenueList";
import VenueListHttp from "./Component/training-http/venue-http/VenueListHttp";
import HeaderTraining from "./Component/training/HeaderTraining";
import HeaderTrainingHttp from "./Component/training-http/HeaderTrainingHttp";
import HeaderApp from "./Component/HeaderApp";
import CohortList from "./Component/training/cohort/CohortList";
import CohortAdd from "./Component/training/cohort/CohortAdd";
import VenueAdd from "./Component/training/venue/VenueAdd";
import VenueAddHttp from "./Component/training-http/venue-http/VenueAddHttp";
import CohortView from "./Component/training/cohort/CohortView";
import CohortViewHttp from "./Component/training-http/cohort-http/CohortViewHttp";
import JsonPlaceholder from "./Component/JsonPlaceholder";
import CohortListHttp from "./Component/training-http/cohort-http/CohortListHttp";
import CohortAddHttp from "./Component/training-http/cohort-http/CohortAddHttp";
function App() {
  return (
    <>
      {/* <h2>This is App Component!</h2> */}
      {/* <Display></Display> */}
      {/* <Color></Color> */}
      {/* <Person></Person> */}
      {/* <FruitObjectArray></FruitObjectArray> */}
      {/* <ActorList></ActorList> */}
      {/* {<ProductList></ProductList>} */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <Counter></Counter> */}
      {/* <PersonClick></PersonClick> */}
      {/* <MovieName></MovieName> */}
      {/* <InputDemo></InputDemo> */}
      {/* <EcomList></EcomList> */}
      {/* <EcomAdd></EcomAdd> */}
      {/* <EcomEdit></EcomEdit> */}
      {/* <InputDemo></InputDemo> */}
      {/* <EcomAddValidation></EcomAddValidation> */}
      {/* <EcomAddValidationRef></EcomAddValidationRef> */}
      {/* <TodoList></TodoList> */}

      <BrowserRouter>
        <HeaderApp></HeaderApp>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/todo" element={<TodoList />}></Route>
          
          <Route path="/ecom-list" element={<EcomList />}></Route>
          
          <Route path="/fake-api" element={<JsonPlaceholder />}></Route>
          <Route path="/training" element={<HeaderTraining />}>
            <Route path="venue-list" element={<VenueList />}></Route>
            <Route path="cohort-list" element={<CohortList />}></Route>
            <Route path="cohort-view/:cid" element={<CohortView />}></Route>
            <Route path="cohort-add" element={<CohortAdd />}></Route>
            <Route path="venue-add" element={<VenueAdd />}></Route>
          </Route>
          <Route path="/training-http" element={<HeaderTrainingHttp />}>
            <Route path="venue-list-http" element={<VenueListHttp />}></Route>
            <Route path="cohort-list-http" element={<CohortListHttp />}></Route>
            <Route
              path="cohort-view-http/:cid"
              element={<CohortViewHttp />}
            ></Route>
            <Route path="cohort-add-http" element={<CohortAddHttp />}></Route>
            <Route path="venue-add-http" element={<VenueAddHttp />}></Route>
          </Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;