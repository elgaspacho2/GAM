document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav ul");
    const mobileMenuButton = document.createElement("button");
    mobileMenuButton.textContent = "Menu";
    mobileMenuButton.classList.add("mobile-menu-button");
 
    header.appendChild(mobileMenuButton);
  
    const mobileStyles = document.createElement("style");
    mobileStyles.innerHTML = `
      .mobile-menu-button {
        background-color: #0077cc;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 18px;
        display: none;
      }
  
      @media (max-width: 768px) {
        .mobile-menu-button {
          display: block;
        }
  
        nav ul {
          display: none;
          flex-direction: column;
          gap: 10px;
          background-color: #0077cc;
          padding: 10px;
          border-radius: 5px;
        }
  
        nav ul.active {
          display: flex;
        }
  
        nav ul li a {
          font-size: 18px;
        }
      }
    `;
    document.head.appendChild(mobileStyles);
  
    mobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
  
