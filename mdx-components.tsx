import type { MDXComponents } from 'mdx/types'
import { components } from './components/native-replacements'

// This file is required to use MDX in `app` directory.
export function useMDXComponents(defaultComponents: MDXComponents): MDXComponents {
  return {
    ...components,
    ...defaultComponents
  }
}
