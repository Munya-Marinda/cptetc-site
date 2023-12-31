import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const FullScreenCategories = () => {
  return (
    <div className="fullScreenCategories_slider_parent">
      <div className="fullScreenCategories_slider_parent_slide-track">
        {[
          [
            "Food & Drink",
            "/things-to-do/food-and-drink/",
            "foodAndDrink_wallpaper_1",
          ],
          [
            "Travel & Stay",
            "/things-to-do/travel/",
            "travelAndStay_wallpaper_1",
          ],
          ["Family", "/things-to-do/family/", "family_wallpaper_1"],
          ["Adventure", "/things-to-do/adventure/", "adventure_wallpaper_1"],
          [
            "Events <br/>& Entertainment",
            "/things-to-do/entertainment/",
            "eventsAndEntertainment_wallpaper_1",
          ],
          [
            "Arts & Culture",
            "/things-to-do/culture/",
            "artsAndCulture_wallpaper_1",
          ],
          [
            "Top Guides",
            "/things-to-do/things-to-do-top-guides/",
            "topGuides_wallpaper_1",
          ],
          [
            "Food & Drink",
            "/things-to-do/food-and-drink/",
            "foodAndDrink_wallpaper_1",
          ],
          [
            "Travel & Stay",
            "/things-to-do/travel/",
            "travelAndStay_wallpaper_1",
          ],
          ["Family", "/things-to-do/family/", "family_wallpaper_1"],
          ["Adventure", "/things-to-do/adventure/", "adventure_wallpaper_1"],
          [
            "Events <br/>& Entertainment",
            "/things-to-do/entertainment/",
            "eventsAndEntertainment_wallpaper_1",
          ],
          [
            "Arts & Culture",
            "/things-to-do/culture/",
            "artsAndCulture_wallpaper_1",
          ],
          [
            "Top Guides",
            "/things-to-do/things-to-do-top-guides/",
            "topGuides_wallpaper_1",
          ],
        ].map((category, n) => {
          //
          //
          //
          return (
            <Link
              key={n}
              link={category[1]}
              className="fullScreenCategories_slider_parent_slide"
            >
              <div className="full_screen_categories_container_1">
                <div className={"category_wallpaper_1 " + category[2]}></div>
                <div className="category_overlay_1"></div>
                <span dangerouslySetInnerHTML={{ __html: category[0] }} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default connect(FullScreenCategories);
