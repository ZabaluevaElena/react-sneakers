import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemElementContainer from "../components/item/ItemElementContainer";
import SliderElement from "../components/Slider/SliderElement";
import { fetchSneakers } from "../redux/action/sneakers";
import Search from "./../components/Search";
import { debounce } from "lodash";
import { setSearch } from "../redux/action/search";
import SkeletonElement from "../components/skeletons/SkeletonElement";



const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ sneakers }) => sneakers);
  const value = useSelector(({ search }) => search.value);
  const [inputSearchValue, setInputSearchValue] = useState("");
  

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  const removeValue = () => {
    setInputSearchValue("");
    dispatch(setSearch(""))
  }

  const debouncedGetResponse = useCallback(
    debounce((value) => dispatch(setSearch(value)), 300),
    [],
  );

  useEffect(() => {
    dispatch(fetchSneakers(value));
  }, [value]);

  return (
    <>
      <section className="slider">
        <SliderElement />
      </section>
      <section className="catalog">
        <div className="catalog__title">
          <h1>{value.length > 0 ? "Поиск по сайту.." : "Все кроссовки"}</h1>
          <Search
            value={inputSearchValue}
            handleInputChange={(value) => handleInputChange(value)}
            removeValue={removeValue}
          />
        </div>
        <div className="catalog__content">
          {isLoaded ? (
            value.length > 0 && !items.length ? (
              <span className="list__empty">
                По вашему запросу обувь не найдена.
              </span>
            ) : (
              items && items.map((obj) => <ItemElementContainer 
              key={obj.id}
              obj={obj}
               />)
            )
          ) : (
            <div className="skeleton-wrap">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <SkeletonElement key={index} type="square" />
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
