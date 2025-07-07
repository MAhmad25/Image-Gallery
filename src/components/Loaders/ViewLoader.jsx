import styled from "styled-components";

const ViewLoader = () => {
      return (
            <StyledWrapper>
                  <div className="w-full mx-auto h-[87dvh] grid place-content-center ">
                        <div className="loader" />
                  </div>
            </StyledWrapper>
      );
};

const StyledWrapper = styled.div`
      .loader {
            border: 4px solid rgba(0, 0, 0, 0.9);
            border-left-color: transparent;
            border-radius: 50%;
      }

      .loader {
            border: 4px solid rgba(0, 0, 0, 0.9);
            border-left-color: transparent;
            width: 36px;
            height: 36px;
      }

      .loader {
            border: 4px solid rgba(0, 0, 0, 0.9);
            border-left-color: transparent;
            width: 36px;
            height: 36px;
            animation: spin89345 1s linear infinite;
      }

      @keyframes spin89345 {
            0% {
                  transform: rotate(0deg);
            }

            100% {
                  transform: rotate(360deg);
            }
      }
`;

export default ViewLoader;
