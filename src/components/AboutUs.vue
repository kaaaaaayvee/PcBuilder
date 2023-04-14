<template>
    <NavigationBar />
    <div class="about-us">
      <h1>About Us</h1>
      <img src="/assets/images/about-us-image.jpg" alt="About Us Image" class="about-us-image">
      <p>We are a team of passionate PC enthusiasts who love building custom computers. Our goal is to provide high-quality, custom-built PCs at an affordable price.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to help people build their dream PCs. Whether you're a gamer, a content creator, or just need a high-performance computer for work, we've got you covered. We believe that everyone should have access to a custom-built PC that meets their specific needs.</p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>High-quality, custom-built PCs</li>
        <li>Expert advice and support</li>
        <li>Affordable prices</li>
        <li>Fast and reliable shipping</li>
      </ul>
      <img src="/assets/images/about-us-team.jpg" alt="About Us Team Image" class="about-us-image">
      <p>Meet our team of experts who will help you build your dream PC:</p>
      <ul class="team-list">
        <li>
          <img src="/assets/images/team-member-1.jpg" alt="Team Member 1" class="team-member-image">
          <h3>John Doe</h3>
          <p>PC Building Expert</p>
        </li>
        <li>
          <img src="/assets/images/team-member-2.jpg" alt="Team Member 2" class="team-member-image">
          <h3>Jane Smith</h3>
          <p>Customer Support</p>
        </li>
        <li>
          <img src="/assets/images/team-member-3.jpg" alt="Team Member 3" class="team-member-image">
          <h3>Mark Johnson</h3>
          <p>Shipping and Logistics</p>
        </li>
      </ul>
    </div>
  </template>


<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "AboutUs",
  components: {
    NavigationBar,
  },
};
</script>

  
  <style>
    .about-us {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      text-align: center;
    }
    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 24px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-bottom: 40px;
    }
    li {
      margin-bottom: 10px;
    }
    .about-us-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    .team-list {
      display: flex;
      justify-content: center;
    }
    .team-list li {
      margin-right: 40px;
    }
    .team-member-image {
      max-width: 100%;
      height: auto;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    h3 {
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
  color: #333;
  font-weight: bold;
}
    </style>  