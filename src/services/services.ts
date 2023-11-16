import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { FetchSlidersResponseDTO, SliderDTO } from "../dto.types";
import { FETCH_SLIDERS_URL, SLIDER_QUERY_KEY } from "../constants";

const fetchSliders = async (): Promise<SliderDTO[]> => {
  try {
    const response: AxiosResponse<FetchSlidersResponseDTO> = await axios.get(
      FETCH_SLIDERS_URL
    );
    return response.data.sliders;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error;
  }
};

export function useFetchSliders() {
  return useQuery({
    queryKey: [SLIDER_QUERY_KEY],
    queryFn: () => fetchSliders(),
  });
}
