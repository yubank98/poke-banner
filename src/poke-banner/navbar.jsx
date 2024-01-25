import React from "react";
import "./styles/navbar.css";
import "../index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"
              />
            </svg>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/michael-yubank-5b616b192/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0A66C2" rx="60" />
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.057h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/yubank98">
            <svg
              width="29.47"
              height="24"
              viewBox="0 0 1227.825 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M1078.94-.985c-33.192-.491-110.295 10.777-239.027 96.936c-70.161-17.535-144.812-26.188-219.591-26.188c-82.278 0-165.425 10.448-242.965 31.719C192.534-24.605 110.955 1.234 110.955 1.234c-53.258 133.183-20.347 231.788-10.344 256.277C38.014 325.069-.2 411.338-.2 517.07c0 79.822 9.085 151.416 31.281 213.653c1.231 4.803.832 3.732 2.906 7.844c4.89 12.884 10.327 25.39 16.438 37.468c2.094 4.346 4 7.563 4 7.563c62.395 116.307 185.396 191.438 404.244 215.028l330.995.375c233.392-23.144 345.386-98.499 396.994-215.591l3.281-7.625c4.89-11.828 9.153-24.135 20.813-65.562c11.659-41.427 16.875-113.172 16.875-193.185c0-114.755-43.1-206.577-113.092-276.434c12.231-39.48 28.57-127.158-16.313-239.402c0 0-6.293-1.995-19.281-2.188zM818.1 420.133c53.893-.117 100.057 9.136 134.717 45.499v.031c43.369 45.541 68.749 100.525 68.749 159.778c0 276.658-177.932 284.183-397.4 284.183c-219.506 0-397.4-38.336-397.4-284.183c0-58.861 25.009-113.516 67.843-158.872c71.451-75.59 192.365-35.562 329.558-35.562c70.423-.011 136.564-10.75 193.935-10.875zm-408.807 81.468c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936zm443.649 0c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936z"
              />
            </svg>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://pokeapi.co">
            <svg
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5zm0-64q111 0 207-50.5T877.5 771T955 576H692q-20 57-69 92.5T512 704t-111-35.5t-69-92.5H69q16 107 78 195t158 138.5T512 960zm128-448q0-53-37.5-90.5T512 384t-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512zm276-192h-20v-37q-9-15-17-27h-47v-57l-3.5-3.5l-3.5-3.5h-57v-47q-16-11-25-17h-39v-21q-31-14-64-24v45h-64V69q-35-5-64-5v64h-64V69q-34 5-64 14v45h-64v-21q-21 10-39 21h39v64h-64v-47q-30 21-57 47h57v64h-64v-57q-25 26-47 57h47v64h-64v-37q-11 18-20 37h20v64H84q-11 35-15 64h59v-64h64v64h64v-64h64v64h12q12-35 38-64h-50v-64h64v50q29-26 64-39v-11h64q32 0 64 11v-11h64v50q7 6 14 14h50v64h64v-64h64v64h64v-64h44q-9-33-24-64zm-84 64v-64h64v64h-64zm-64-64v-64h64v64h-64zm-64-64v-64h64v64h-64zm-64-64v-64h64v64h-64zm-128 0v-64h64v64h-64zm-128 0v-64h64v64h-64zm0 64h-64v-64h64v64zm-64 64h-64v-64h64v64zm-64 64h-64v-64h64v64zm192-128v64h-64v-64h64zm128 0v64h-64v-64h64zm128 0v64h-64v-64h64zm64 64v64h-64v-64h64zm-192-64v-64h64v64h-64zm-128 0v-64h64v64h-64zm0 256.5q0-26.5 19-45.5t45.5-19t45 18.5T576 512t-18.5 45.5t-45 18.5t-45.5-18.5t-19-45z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
