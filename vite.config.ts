import { defineConfig, PluginOption } from 'vite'
import glimmerXPlugin from 'vite-plugin-glimmerx';

export default defineConfig({
  plugins: [
    // visualizer(),
    glimmerXPlugin() as PluginOption
  ]
});