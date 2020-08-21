import React from 'react'
import PropTypes from 'prop-types'
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: 'rgb(249, 250, 252)',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
         <img src="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDBkMWIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSI2IiBzdHJva2Utb3BhY2l0eT0iMCI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiCiAgICAgICAgICAgICAgICAgYmVnaW49IjEuNXMiIGR1cj0iM3MiCiAgICAgICAgICAgICAgICAgdmFsdWVzPSI2OzIyIgogICAgICAgICAgICAgICAgIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IgogICAgICAgICAgICAgICAgIGJlZ2luPSIxLjVzIiBkdXI9IjNzIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTswIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utd2lkdGgiCiAgICAgICAgICAgICAgICAgYmVnaW49IjEuNXMiIGR1cj0iM3MiCiAgICAgICAgICAgICAgICAgdmFsdWVzPSIyOzAiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iNiIgc3Ryb2tlLW9wYWNpdHk9IjAiPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIgogICAgICAgICAgICAgICAgIGJlZ2luPSIzcyIgZHVyPSIzcyIKICAgICAgICAgICAgICAgICB2YWx1ZXM9IjY7MjIiCiAgICAgICAgICAgICAgICAgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiCiAgICAgICAgICAgICAgICAgYmVnaW49IjNzIiBkdXI9IjNzIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iMTswIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utd2lkdGgiCiAgICAgICAgICAgICAgICAgYmVnaW49IjNzIiBkdXI9IjNzIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iMjswIiBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDwvY2lyY2xlPgogICAgICAgIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjgiPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIgogICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjVzIgogICAgICAgICAgICAgICAgIHZhbHVlcz0iNjsxOzI7Mzs0OzU7NiIKICAgICAgICAgICAgICAgICBjYWxjTW9kZT0ibGluZWFyIgogICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4K" alt="loader spinner" width="150" height="150" />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                setTimeout(function() {
                    document.getElementById("___loader").style.display = "none"
                }, 2000)
            `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
