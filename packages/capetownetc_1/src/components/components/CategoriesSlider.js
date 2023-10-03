import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { Carousel } from "react-bootstrap";

const CategoriesSlider = ({ state }) => {
  return (
    <div className="categories_slider_parent_1" style={{ width: "100%" }}>
      <Carousel variant="light">
        {/* <Carousel.Item>
          <div className="categories_slider_container_1">
            <Link link="/things-to-do/food-and-drink/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 foodAndDrink_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <Carousel.Caption>
                  <span> FOOD & DRINK </span>
                </Carousel.Caption>
              </div>
            </Link>
            <Link link="/things-to-do/travel/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 travelAndStay_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> TRAVEL & STAY </span>
              </div>
            </Link>
            <Link link="/things-to-do/family">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 family_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> FAMILY </span>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="categories_slider_container_1">
            <Link link="/things-to-do/adventure">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 adventure_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> ADVENTURE </span>
              </div>
            </Link>
            <Link link="/things-to-do/entertainment/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 eventsAndEntertainment_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> EVENTS & ENTERTAINMENT </span>
              </div>
            </Link>
            <Link link="/things-to-do/culture/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 artsAndCulture_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> ARTS & CULTURE </span>
              </div>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="categories_slider_container_1">
            <Link link="/things-to-do/things-to-do-top-guides/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 topGuides_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> TOP GUIDES </span>
              </div>
            </Link>
          </div>
        </Carousel.Item> */}

        <Carousel.Item>
          <Link link="/things-to-do/food-and-drink/">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 foodAndDrink_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span> FOOD & DRINK </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link link="/things-to-do/travel/">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 travelAndStay_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span> TRAVEL & STAY </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link link="/things-to-do/family">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 family_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span> FAMILY </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link link="/things-to-do/adventure">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 adventure_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span> ADVENTURE </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link link="/things-to-do/entertainment/">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 eventsAndEntertainment_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span>
                EVENTS <br /> & ENTERTAINMENT
              </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link link="/things-to-do/culture/">
            <div className="full_screen_categories_container_2">
              <div className="category_wallpaper_2 artsAndCulture_wallpaper_1"></div>
              <div className="category_overlay_2"></div>
              <span> 
                ARTS <br /> & CULTURE 
              </span>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <div className="categories_slider_container_1">
            <Link link="/things-to-do/things-to-do-top-guides/">
              <div className="full_screen_categories_container_2">
                <div className="category_wallpaper_2 topGuides_wallpaper_1"></div>
                <div className="category_overlay_2"></div>
                <span> TOP GUIDES </span>
              </div>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default connect(CategoriesSlider);
