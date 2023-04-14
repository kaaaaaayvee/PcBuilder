<template>
    <nav>
      <ul>
        <li>
          <router-link to="/products" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>

      </ul>
    </nav>
  </template>
  
  <style>
  body {
    margin: 0;
  }

  nav {
    
    color: #000000;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 10px;
  }

  .nav-link {
    color: #000000;
    text-decoration: none;
    padding: 10px;
  }

  .nav-link:hover {
    background-color: #fff;
    color: #333;
  }
</style>

  