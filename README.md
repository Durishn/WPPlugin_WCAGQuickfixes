<!-- To change the stability level, replace 'stable' with 'stable', 'unstable', 'experimental', or 'deprecated'-->
![Project State][stable-shield]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h2 align="center">WCAG Quickfixes: A Wordpress Plugin</h2>

  <p align="center">
    Wordpress Plugin to hold generalized and safe quickfixes to WCAG 2.0 (AA) issues identified by the SiteImprove and WebAIM scanners.
    <br />
    <a href="https://github.com/Durishn/WPPlugin_WCAGQuickfixes/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href='https://www.buymeacoffee.com/nicdurish' target='_blank' style='margin-top:50px;'><img height='30' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=0' border='0' alt='Buy Me a Coffee' /></a>
    <br />
    <br/ >
    <a href="https://github.com/Durishn/WPPlugin_WCAGQuickfixes/issues">Report Bug</a>
    ·
    <a href="https://github.com/Durishn/WPPlugin_WCAGQuickfixes/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This repository holds the code for WCAG Quickfixes, a Wordpress Plugin built to introduce quickfixes to WCAG errors found by SiteImprove or WebAIM scanners. These errors were found to be common in many wordpress websites as they were introduced by commonly used plugins and themes. This plugin uses CSS and JQuery to target specific page elements to provide fixes - providing medicine for the symptoms but not fixes to the ailment. It also provides a settings page where users can add site-specific CSS and JS fixes that are associated with this plugin and not their theme.

**Generalized fixes performed by this plugin**
- Fix AA contrast issue with typography in WP admin bar
- Add aria-label to WP admin bar
- Add underline to all links within a paragraph
- Move frameborders, aligns, and scrolling from structure to style
- Replace `<i>` with italized spans
- Add invisible top level heading to page equal to second level heading if one doesn't exist
- Add aria-label to navigation and top level header not included in landmarks

DIVI-based:
- Fix Divi non unique top menu ID
- Fix Divi non-distinguishable landmarks in article titles, sidebar and search
- Add aria-label to navigator and scroll arrow not included in landmark

<!-- USAGE EXAMPLES -->
## Usage

To download this plugin for use in your WP instance - download the latest release of this theme and drop the zip into the `New Plugins` section of WordPress.

Once you have downloaded this plugin and activated it in your wordpress instance, you should see the fixes populated on your site. Included in this plugin is also [a list of commonly used site-specific fixes](https://github.com/Guelph-Digital-Service/gds-wcag-quickfixes/blob/master/docs/example.md) that you can drop into the custom CSS, and JS settings of this plugin in WP.

Fixes that require site-specific targeting or elements (such as alt-text or landmarking) should be added within the respective WordPress Plugin Settings pages.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Durishn/WPPlugin_WCAGQuickfixes/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Testing
Sites should be tested and checked thoroughly upon introducing this plugin. It is likely to be stable once placed, but I have found a plugin or two that it doesn't play nicely with. In these cases, make a pull request asking for a generalized fix to be removed. Removed generalized fixes will be listed in the bottom of this README - in the case that you want to update your plugin to retrieve new fixes, check the removed fixes as you may want to move some of them into your customized fixes section!

<!-- Authors -->
## Authors
**Nic Durish** - [@Durishn](https://twitter.com/Durishn) - [mail@nicdurish.ca](mailto:mail@nicdurish.ca)

See the [contributors](https://github.com/Durishn/WPPlugin_WCAGQuickfixes/contributors) page for an updated list of contributors to this project



<!-- LICENSE -->
## License
Along with WordPress, this project is licensed under the GNU V3 General License - see the [LICENSE](LICENSE) file for details.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->


[stable-shield]: https://img.shields.io/badge/stability-stable-green.svg
[unstable-shield]: https://img.shields.io/badge/stability-unstable-yellow.svg
[deprecated-shield]: https://img.shields.io/badge/stability-deprecated-orange.svg
[experimental-shield]: https://img.shields.io/badge/stability-experimental-red.svg

[contributors-shield]: https://img.shields.io/github/contributors/Durishn/WPPlugin_WCAGQuickfixes.svg
[contributors-url]: https://github.com/Durishn/WPPlugin_WCAGQuickfixes/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Durishn/WPPlugin_WCAGQuickfixes.svg
[forks-url]: https://github.com/Durishn/WPPlugin_WCAGQuickfixes/network/members
[stars-shield]: https://img.shields.io/github/stars/Durishn/WPPlugin_WCAGQuickfixes.svg
[stars-url]: https://github.com/Durishn/WPPlugin_WCAGQuickfixes/stargazers
[issues-shield]: https://img.shields.io/github/issues/Durishn/WPPlugin_WCAGQuickfixes.svg
[issues-url]: https://github.com/Durishn/WPPlugin_WCAGQuickfixes/issues
[license-shield]: https://img.shields.io/github/license/Durishn/WPPlugin_WCAGQuickfixes.svg
[license-url]: https://github.com/Durishn/WPPlugin_WCAGQuickfixes/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-Github-black.svg?logo=github&colorB=555
[linkedin-url]: https://github.com/Durishn
[product-screenshot]: docs/images/screenshot.png
