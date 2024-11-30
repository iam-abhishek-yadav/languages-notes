# Parcel

- **Zero Config**: Parcel requires no configuration to get started.
- **Dev Server**: Parcel includes a development server out of the box. Just run `parcel index.html` to get started.
- **Hot Module Replacement**: When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!
- **Diagnostics**: If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
- **Native Performance**: Parcel's JavaScript compiler, CSS transformer, and source maps implementation are written in Rust for maximum performance.
- **Multi-core**: Parcel is designed around a multi-core architecture that parallelizes work across all of your cores and takes full advantage of modern hardware.
- **Reliable Caching**: Everything Parcel does is cached – transformation, dependency resolution, bundling, optimizing, and everything in between.
- **Lazy Dev Builds**: In development, Parcel can defer building files until they are requested in the browser.
- **Tree Shaking**: Parcel supports tree-shaking for both ES modules and CommonJS out of the box. It statically analyzes the imports and exports of each module, and removes everything that isn't used.
- **Minification**: Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Just run `parcel build index.html`, and your whole application will be built and optimized automatically.
- **Image Optimization**: Parcel supports resizing, converting, and optimizing images. Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc., and Parcel will take care of the conversion and optimization process.
- **Code Splitting**: When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle.
- **Content Hashing**: Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.
- **Transpilation**: Parcel transpiles your JavaScript and CSS for your target browsers automatically. Just declare a `browserslist` in your `package.json`, and Parcel takes care of transpiling only what's needed.
- **Differential Bundling**: When you use `<script type="module">`, Parcel automatically generates a nomodule fallback for old browsers as well, depending on your browser targets.
- **Workers**: Parcel supports web workers, service workers, and worklets out of the box. Just use the standard browser APIs and Parcel will automatically follow the dependency.

## References:

- [Parcel Documentation](https://parceljs.org/docs/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browserlists](https://browserslist.dev/)
