import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useDispatchDataToStore(data, actionCreator) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(actionCreator(data));
    }
  }, [data, dispatch, actionCreator]);
}

export default useDispatchDataToStore;
