module.exports = {
  meta: {
      type: "layout",

      docs: {
          description: "require or disallow semicolons instead of ASI",
          category: "Stylistic Issues",
          recommended: false,
          url: "https://eslint.org/docs/rules/semi"
      },

      fixable: "code",

      schema: {
          anyOf: [
              {
                  type: "array",
                  items: [
                      {
                          enum: ["never"]
                      },
                      {
                          type: "object",
                          properties: {
                              beforeStatementContinuationChars: {
                                  enum: ["always", "any", "never"]
                              }
                          },
                          additionalProperties: false
                      }
                  ],
                  minItems: 0,
                  maxItems: 2
              },
              {
                  type: "array",
                  items: [
                      {
                          enum: ["always"]
                      },
                      {
                          type: "object",
                          properties: {
                              omitLastInOneLineBlock: { type: "boolean" }
                          },
                          additionalProperties: false
                      }
                  ],
                  minItems: 0,
                  maxItems: 2
              }
          ]
      },

      messages: {
          missingSemi: "Missing semicolon.",
          extraSemi: "Extra semicolon."
      }
  }},