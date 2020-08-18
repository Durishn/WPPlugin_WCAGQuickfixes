# WCAG Quickfixes WPPlugin by Guelph Digital Service
This repository holds the code for WCAG Quickfixes, a Wordpress Plugin built to introduce quickfixes to WCAG errors found by SiteImprove or WebAIM scanners. These errors were found to be common in many guelph-based websites as they were introduced by commonly used plugins and themes. This plugin uses CSS and JQuery to target specific page elements to provide fixes - providing medicine for the symptoms but not fixes to the ailment.

Fixes that require site-specific targeting or elements (such as alt-text or landmarking) should be added within the respective WordPress Plugin Settings pages.

## Installation
Download the latest release of this theme and drop the zip into the `New Plugins` section of WordPress

## Testing
Sites should be tested and checked thoroughly upon introducing this plugin. It is likely to be stable once placed, but I have found a plugin or two that it doesn't play nicely with. In these cases, make a pull request asking for a generalized fix to be removed. Removed generalized fixes will be listed in the bottom of this README - in the case that you want to update your plugin to retrieve new fixes, check the removed fixes as you may want to move some of them into your customized fixes section!

## Versioning
We aim to use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Guelph-Digital-Service/gds-wcag-quickfixes/tags).

## Authors

* **[Durish, Nic](https://nicdurish.ca)**

## License
Along with WordPress, this project is licensed under the GNU V3 General License - see the [LICENSE](LICENSE) file for details.
