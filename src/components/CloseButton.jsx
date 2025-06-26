import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Close = () => {
      const navigate = useNavigate();
      return (
            <StyledWrapper>
                  <button onClick={() => navigate("/")} className="button flex p-5 py-3 hover:text-white justify-center bg-black items-center rounded-full">
                        <h1 className="font-Nova text-zinc-200 hover:text-white text-2xl  uppercase"> X </h1>
                        <div className="close">Close</div>
                  </button>
            </StyledWrapper>
      );
};

const StyledWrapper = styled.div`
      .button {
            position: relative;
            border: none;
            transition: background 0.5s;
      }
      .close {
            position: absolute;
            display: flex;
            padding: 0.8rem 1.5rem;
            align-items: center;
            justify-content: center;
            transform: translateX(-50%);
            top: 70%;
            left: 50%;
            width: 3em;
            height: 1.7em;
            font-size: 12px;
            background-color: rgb(19, 22, 24);
            color: rgb(187, 229, 236);
            border: none;
            border-radius: 3px;
            pointer-events: none;
            opacity: 0;
      }

      .button:hover {
            background-color: rgb(211, 21, 21);
      }
      .button:active {
            background-color: rgb(130, 0, 0);
      }

      .button:hover > .close {
            animation: close 0.2s forwards 0.25s;
      }

      @keyframes close {
            100% {
                  opacity: 1;
            }
      }
`;

export default Close;
