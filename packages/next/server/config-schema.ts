import { NextConfig } from './config'
import type { JSONSchemaType } from 'ajv'
import { VALID_LOADERS } from '../shared/lib/image-config'

const configSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    amp: {
      additionalProperties: false,
      properties: {
        canonicalBase: {
          minLength: 1,
          type: 'string',
        },
      },
      type: 'object',
    },
    analyticsId: {
      type: 'string',
    },
    assetPrefix: {
      minLength: 1,
      type: 'string',
    },
    basePath: {
      type: 'string',
    },
    cleanDistDir: {
      type: 'boolean',
    },
    compiler: {
      additionalProperties: false,
      properties: {
        emotion: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                sourceMap: {
                  type: 'boolean',
                },
                autoLabel: {
                  type: 'string',
                  enum: ['always', 'dev-only', 'never'],
                },
                labelFormat: {
                  type: 'string',
                  minLength: 1,
                },
              },
            },
          ] as any,
        },
        reactRemoveProperties: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                properties: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
            },
          ] as any,
        },
        relay: {
          type: 'object',
        },
        removeConsole: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                exclude: {
                  type: 'array',
                  items: {
                    type: 'string',
                    minLength: 1,
                  },
                },
              },
            },
          ] as any,
        },
        styledComponents: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                displayName: {
                  type: 'boolean',
                },
                topLevelImportPaths: {
                  oneOf: [
                    { type: 'boolean' },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        minLength: 1,
                      },
                    },
                  ],
                },
                ssr: {
                  type: 'boolean',
                },
                fileName: {
                  type: 'boolean',
                },
                meaninglessFileNames: {
                  oneOf: [
                    { type: 'boolean' },
                    {
                      type: 'array',
                      items: {
                        type: 'string',
                        minLength: 1,
                      },
                    },
                  ],
                },
                minify: {
                  type: 'boolean',
                },
                transpileTemplateLiterals: {
                  type: 'boolean',
                },
                namespace: {
                  type: 'string',
                  minLength: 1,
                },
                pure: {
                  type: 'boolean',
                },
                cssProp: {
                  type: 'boolean',
                },
              },
            },
          ] as any,
        },
      },
      type: 'object',
    },
    compress: {
      type: 'boolean',
    },
    crossOrigin: {
      oneOf: [
        false,
        {
          enum: ['anonymous', 'use-credentials'],
          type: 'string',
        },
      ], // automatic typing does not like enum
    } as any,
    devIndicators: {
      additionalProperties: false,
      properties: {
        buildActivity: {
          type: 'boolean',
        },
        buildActivityPosition: {
          // automatic typing does not like enum
          enum: ['bottom-left', 'bottom-right', 'top-left', 'top-right'] as any,
          type: 'string',
        },
      },
      type: 'object',
    },
    distDir: {
      minLength: 1,
      type: 'string',
      nullable: true,
    },
    env: {
      type: 'object',
    },
    eslint: {
      additionalProperties: false,
      properties: {
        dirs: {
          items: {
            minLength: 1,
            type: 'string',
          },
          type: 'array',
        },
        ignoreDuringBuilds: {
          type: 'boolean',
        },
      },
      type: 'object',
    },
    excludeDefaultMomentLocales: {
      type: 'boolean',
    },
    experimental: {
      additionalProperties: false,
      properties: {
        adjustFontFallbacks: {
          type: 'boolean',
        },
        adjustFontFallbacksWithSizeAdjust: {
          type: 'boolean',
        },
        amp: {
          additionalProperties: false,
          properties: {
            optimizer: {
              type: 'object',
            },
            skipValidation: {
              type: 'boolean',
            },
            validator: {
              type: 'string',
            },
          },
          type: 'object',
        },
        cpus: {
          type: 'number',
        },
        craCompat: {
          type: 'boolean',
        },
        disableOptimizedLoading: {
          type: 'boolean',
        },
        disablePostcssPresetEnv: {
          type: 'boolean',
        },
        esmExternals: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              const: 'loose',
            },
          ] as any,
        },
        appDir: {
          type: 'boolean',
        },
        allowMiddlewareResponseBody: {
          type: 'boolean',
        },
        externalDir: {
          type: 'boolean',
        },
        fallbackNodePolyfills: {
          type: 'boolean',
        },
        forceSwcTransforms: {
          type: 'boolean',
        },
        fullySpecified: {
          type: 'boolean',
        },
        gzipSize: {
          type: 'boolean',
        },
        incrementalCacheHandlerPath: {
          type: 'string',
        },
        isrFlushToDisk: {
          type: 'boolean',
        },
        isrMemoryCacheSize: {
          type: 'number',
        },
        largePageDataBytes: {
          type: 'number',
        },
        legacyBrowsers: {
          type: 'boolean',
        },
        manualClientBasePath: {
          type: 'boolean',
        },
        modularizeImports: {
          type: 'object',
        },
        newNextLinkBehavior: {
          type: 'boolean',
        },
        nextScriptWorkers: {
          type: 'boolean',
        },
        optimizeCss: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'object',
            },
          ] as any,
        },
        optimisticClientCache: {
          type: 'boolean',
        },
        outputFileTracingRoot: {
          minLength: 1,
          type: 'string',
        },
        pageEnv: {
          type: 'boolean',
        },
        profiling: {
          type: 'boolean',
        },
        proxyTimeout: {
          minimum: 0,
          type: 'number',
        },
        runtime: {
          // automatic typing doesn't like enum
          enum: ['experimental-edge', 'nodejs'] as any,
          type: 'string',
        },
        serverComponentsExternalPackages: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        transpilePackages: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        scrollRestoration: {
          type: 'boolean',
        },
        sharedPool: {
          type: 'boolean',
        },
        skipMiddlewareUrlNormalize: {
          type: 'boolean',
        },
        skipTrailingSlashRedirect: {
          type: 'boolean',
        },
        sri: {
          properties: {
            algorithm: {
              enum: ['sha256', 'sha384', 'sha512'] as any,
              type: 'string',
            },
          },
          type: 'object',
        },
        swcFileReading: {
          type: 'boolean',
        },
        swcMinify: {
          type: 'boolean',
        },
        swcMinifyDebugOptions: {
          additionalProperties: false,
          properties: {
            compress: {
              type: 'object',
            },
            mangle: {
              type: 'object',
            },
          },
          type: 'object',
        },
        swcPlugins: {
          type: 'array',
        },
        swcTraceProfiling: {
          type: 'boolean',
        },
        urlImports: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        enableUndici: {
          type: 'boolean',
        },
        workerThreads: {
          type: 'boolean',
        },
        fontLoaders: {
          items: {
            additionalProperties: false,
            properties: {
              loader: {
                type: 'string',
              },
              options: {},
            },
            type: 'object',
            required: ['loader'],
          },
          type: 'array',
        } as any,
        webVitalsAttribution: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'],
          } as any,
        },
        turbotrace: {
          type: 'object',
          properties: {
            logLevel: {
              type: 'string',
              enum: [
                'bug',
                'fatal',
                'error',
                'warning',
                'hint',
                'note',
                'suggestions',
                'info',
              ],
            } as any,
            logDetail: {
              type: 'boolean',
            },
            contextDirectory: {
              type: 'string',
            },
            processCwd: {
              type: 'string',
            },
          },
        },
      },
      type: 'object',
    },
    exportPathMap: {
      isFunction: true,
      errorMessage: 'must be a function that returns a Promise',
    } as any,
    generateBuildId: {
      isFunction: true,
      errorMessage: 'must be a function that returns a Promise',
    } as any,
    generateEtags: {
      type: 'boolean',
    },
    headers: {
      isFunction: true,
      errorMessage: 'must be a function that returns a Promise',
    } as any,
    httpAgentOptions: {
      additionalProperties: false,
      properties: {
        keepAlive: {
          type: 'boolean',
        },
      },
      type: 'object',
    },
    i18n: {
      additionalProperties: false,
      properties: {
        defaultLocale: {
          minLength: 1,
          type: 'string',
        },
        domains: {
          items: {
            additionalProperties: false,
            properties: {
              defaultLocale: {
                minLength: 1,
                type: 'string',
              },
              domain: {
                minLength: 1,
                type: 'string',
              },
              http: {
                type: 'boolean',
              },
              locales: {
                items: {
                  minLength: 1,
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: 'object',
          },
          type: 'array',
        },
        localeDetection: {
          type: 'boolean',
        },
        locales: {
          items: {
            minLength: 1,
            type: 'string',
          },
          type: 'array',
        },
      },
      type: 'object',
    },
    images: {
      additionalProperties: false,
      properties: {
        remotePatterns: {
          items: {
            additionalProperties: false,
            properties: {
              hostname: {
                minLength: 1,
                type: 'string',
              },
              pathname: {
                minLength: 1,
                type: 'string',
              },
              port: {
                minLength: 1,
                type: 'string',
              },
              protocol: {
                // automatic typing doesn't like enum
                enum: ['http', 'https'] as any,
                type: 'string',
              },
            },
            type: 'object',
          },
          type: 'array',
        },
        unoptimized: {
          type: 'boolean',
        },
        contentSecurityPolicy: {
          minLength: 1,
          type: 'string',
        },
        dangerouslyAllowSVG: {
          type: 'boolean',
        },
        deviceSizes: {
          items: {
            type: 'number',
          },
          minItems: 1,
          type: 'array',
        },
        disableStaticImages: {
          type: 'boolean',
        },
        domains: {
          items: {
            type: 'string',
          },
          type: 'array',
        },
        formats: {
          items: {
            enum: ['image/avif', 'image/webp'], // automatic typing does not like enum
            type: 'string',
          } as any,
          type: 'array',
        },
        imageSizes: {
          items: {
            type: 'number',
          },
          minItems: 1,
          type: 'array',
        },
        loader: {
          // automatic typing does not like enum
          enum: VALID_LOADERS as any,
          type: 'string',
        },
        loaderFile: {
          minLength: 1,
          type: 'string',
        },
        minimumCacheTTL: {
          type: 'number',
        },
        path: {
          minLength: 1,
          type: 'string',
        },
      },
      type: 'object',
    },
    onDemandEntries: {
      additionalProperties: false,
      properties: {
        maxInactiveAge: {
          type: 'number',
        },
        pagesBufferLength: {
          type: 'number',
        },
      },
      type: 'object',
    },
    optimizeFonts: {
      type: 'boolean',
    },
    output: {
      // automatic typing doesn't like enum
      enum: ['standalone'] as any,
      type: 'string',
    },
    outputFileTracing: {
      type: 'boolean',
    },
    pageExtensions: {
      minItems: 1,
      type: 'array',
    },
    poweredByHeader: {
      type: 'boolean',
    },
    productionBrowserSourceMaps: {
      type: 'boolean',
    },
    publicRuntimeConfig: {
      type: 'object',
    },
    reactStrictMode: {
      type: 'boolean',
    },
    redirects: {
      isFunction: true,
      errorMessage: 'must be a function that returns a Promise',
    } as any,
    rewrites: {
      isFunction: true,
      errorMessage: 'must be a function that returns a Promise',
    } as any,
    sassOptions: {
      type: 'object',
    },
    serverRuntimeConfig: {
      type: 'object',
    },
    staticPageGenerationTimeout: {
      type: 'number',
    },
    swcMinify: {
      type: 'boolean',
    },
    trailingSlash: {
      type: 'boolean',
    },
    typescript: {
      additionalProperties: false,
      properties: {
        ignoreBuildErrors: {
          type: 'boolean',
        },
        tsconfigPath: {
          minLength: 1,
          type: 'string',
        },
      },
      type: 'object',
    },
    useFileSystemPublicRoutes: {
      type: 'boolean',
    },
    webpack: {
      isFunction: true,
      errorMessage:
        'must be a function that returns a webpack configuration object',
    } as any,
  },
} as JSONSchemaType<NextConfig>

// module.exports is used to get around an export bug with TypeScript
// and the Ajv automatic typing
module.exports = {
  configSchema,
}
