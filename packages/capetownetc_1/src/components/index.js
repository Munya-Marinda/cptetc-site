import React, { useState, useEffect } from "react";
import Switch from "@frontity/components/switch";
import { HelmetProvider, connect } from "frontity";
import GlobalStyles from "./styles/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideosTrendingPage from "./pages/VideosTrendingPage";
import HomePage from "./pages/HomePage";
import NewsTrendingPage from "./pages/NewsTrendingPage";
import NewsCategoryPage from "./pages/NewsCategoryPage";
import VideosCategeoryPage from "./pages/VideosCategeoryPage";
import ThingsToDoTrendingPage from "./pages/ThingsToDoTrendingPage";
import ThingsToDoCategoryPage from "./pages/ThingsToDoCategoryPage";
import WinTrending from "./pages/WinTrending";
import SinglePostView from "./pages/SinglePostView";
import VouchersPage from "./pages/VouchersPage";
import ContactPage from "./pages/ContactPage";
import SubscribePage from "./pages/SubscribePage";
import fetchMenu from "./handlers/handleMenu";
import WinCategoryPage from "./pages/WinCategoryPage";
import WinCompetitionsPage from "./pages/WinCompetitionsPage";
import RateCardPage from "./pages/RateCardPage";
import SubmitYourContent from "./pages/SubmitYourContent";
import SearchResultPage from "./pages/SearchResultPage";
// Import your CSS file
// import "./styles/styles.css";

const Root = ({ state }) => {
  const [headerData, setHeaderData] = useState("/");
  const [formOpen, setFormOpen] = useState(false);
  const [headerStickyContainerHeight, setHeaderStickyContainerHeight] =
    useState(0);
  const [headerIsSticky, setHeaderIsSticky] = useState(false);
  const [menu, setMenu] = useState(null);
  const data = state.source.get(state.router.link);

  //
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const newMenu = await fetchMenu(state);
        setMenu(newMenu);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchMenuData();
  }, []);

  const updateHeaderData = (data) => {
    setHeaderData(data);
  };

  const _toggledleSubmitYourContentModal = (bool) => {
    setFormOpen(bool);
  };

  const change_headerStickyContainerHeight = (newHeight) => {
    setHeaderStickyContainerHeight(newHeight + 20);
  };

  const change_headerIsSticky = (isSticky) => {
    setHeaderIsSticky(isSticky);
  };

  //
  //
  //
  //
  //
  //
  return (
    <>
      <HelmetProvider>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloock&family=Roboto&family=Montserrat:wght@800&display=swap"
          rel="stylesheet"
        />
        {/* <link href="/static/styles.css" rel="stylesheet" /> */}
        {/* BOOTSTRAP CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </HelmetProvider>
      <GlobalStyles />
      <Header
        menu={menu}
        formOpen={formOpen}
        updateHeaderData={updateHeaderData}
        change_headerIsSticky={change_headerIsSticky}
        change_headerStickyContainerHeight={change_headerStickyContainerHeight}
      />
      <Switch>
        <HomePage
          when={data.route === "/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <SubmitYourContent
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/submit-your-content/"}
        />
        <ContactPage
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/advertise/contact/"}
        />
        <RateCardPage
          _toggledleSubmitYourContentModal={_toggledleSubmitYourContentModal}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={
            data.route === "/advertise/advertising/" ||
            data.route === "/advertise/"
          }
        />
        <SubscribePage
          _toggledleSubmitYourContentModal={_toggledleSubmitYourContentModal}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/subscribe-capetownetc-magazine/"}
        />
        <SinglePostView
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.isPost}
        />
        <VideosTrendingPage
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/videos/"}
        />
        <VideosCategeoryPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={
            data.route === "/videos/things-to-do-video/" ||
            data.route === "/videos/news-videos/"
          }
        />
        <VouchersPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/vouchers/"}
        />
        <NewsTrendingPage
          when={data.route === "/news/"}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
        />
        <NewsCategoryPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={
            data.route === "/news/western-cape/" ||
            data.route === "/news/south-africa/" ||
            data.route === "/news/world/" ||
            data.route === "/news/opinion/" ||
            data.route === "/news/good-news/" ||
            data.route === "/news/business/" ||
            data.route === "/news/sport/"
          }
        />
        <ThingsToDoTrendingPage
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/things-to-do/"}
        />
        <SearchResultPage
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/search/"}
        />
        <ThingsToDoCategoryPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={
            data.route === "/things-to-do/food-and-drink/" ||
            data.route === "/things-to-do/adventure/" ||
            data.route === "/things-to-do/culture/" ||
            data.route === "/things-to-do/family/" ||
            data.route === "/things-to-do/travel/" ||
            data.route === "/things-to-do/entertainment/" ||
            data.route === "/things-to-do/things-to-do-top-guides/"
          }
        />
        <WinTrending
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
          when={data.route === "/win/"}
        />
        <WinCategoryPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={
            data.route === "/win/photo-of-the-month/" ||
            data.route === "/win/video-of-the-month/"
          }
        />
        <WinCompetitionsPage
          headerData={headerData}
          headerIsSticky={headerIsSticky}
          headerStickyContainerHeight={headerStickyContainerHeight}
          when={data.route === "/win/competitions/"}
        />
      </Switch>
      <Footer
        menu={menu}
        _toggledleSubmitYourContentModal={_toggledleSubmitYourContentModal}
      />
    </>
  );
};

export default connect(Root);
