# WCAG Quickfixes WPPlugin by Guelph Digital Service
This repository holds the code for WCAG Quickfixes, a Wordpress Plugin built to introduce quickfixes to WCAG errors found by SiteImprove or WebAIM scanners. These errors were found to be common in many guelph-based websites as they were introduced by commonly used plugins and themes. This plugin uses CSS and JQuery to target specific page elements to provide fixes - providing medicine for the symptoms but not fixes to the ailment. It also provides a settings page where users can add site-specific CSS and JS fixes that are associated with this plugin and not their theme.

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


## Installation
To download this plugin for use in your WP instance - download the latest release of this theme and drop the zip into the `New Plugins` section of WordPress.

## Usage
Once you have downloaded this plugin and activated it in your wordpress instance, you should see the fixes populated on your site. Included in this plugin is also [a list of commonly used site-specific fixes](https://github.com/Guelph-Digital-Service/gds-wcag-quickfixes/docs/example.md) that you can drop into the custom CSS, and JS settings of this plugin in WP.

Fixes that require site-specific targeting or elements (such as alt-text or landmarking) should be added within the respective WordPress Plugin Settings pages.

## Contribution
So far this repository has been a single-author project. If you would like to contribute please message the repository owner to be added as a contributor or to open merge requests.

## Testing
Sites should be tested and checked thoroughly upon introducing this plugin. It is likely to be stable once placed, but I have found a plugin or two that it doesn't play nicely with. In these cases, make a pull request asking for a generalized fix to be removed. Removed generalized fixes will be listed in the bottom of this README - in the case that you want to update your plugin to retrieve new fixes, check the removed fixes as you may want to move some of them into your customized fixes section!

## Versioning
We aim to use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Guelph-Digital-Service/gds-wcag-quickfixes/tags).

## Authors

* **[Durish, Nic](https://nicdurish.ca)**

## License
Along with WordPress, this project is licensed under the GNU V3 General License - see the [LICENSE](LICENSE) file for details.
