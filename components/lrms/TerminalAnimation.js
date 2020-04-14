import React from 'react'
import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'

import { TerminalLink, space, C, Int, Str, Key, StillCaret, Caret } from '../Shell.js'

const StillCaretB = () => <StillCaret color="black" />

const p = (str='', duration=100) => ({
  str, duration
})

const render_command = (unique_name, input_parts=[], input='', output_parts=[], output='', caret=true, folder='~', previous_commands=[]) => {
  const l_input = <span><C c='#d33682'>λ</C> {folder} {input}</span>
  const l_output = <span>{output}</span>
  const l_input_parts = input_parts.map((x, i) => (
    <Frame key={unique_name + '_input_' + i} duration={x.duration}>
      {previous_commands.map((x, _i) => (
        <span key={unique_name + '_' + i + '.' + _i}>{x.input}<br />{x.output}<br /></span>
      ))}
      <C c='#d33682'>λ</C> {folder} {x.str}{caret ? <StillCaretB /> : ''}
    </Frame>
  ))
  const l_output_parts = output_parts.map((x, i) => (
    <Frame key={unique_name + '_output_' + i} duration={x.duration}>
      {previous_commands.map((x, _i) => (
        <span key={unique_name + '_' + i + '.' + _i}>{x.input}<br />{x.output}<br /></span>
      ))}
      {l_input}<br />{x.str}
    </Frame>
  ))

  return {
    input: l_input,
    output: l_output,
    input_parts: l_input_parts,
    output_parts: l_output_parts
  }
}

// installing yarn and serve, cloning both frontend and backend repos

const install_yarn = render_command('install_yarn', [
  p('', 500),
  p('n', 70),
  p('npm', 90),
  p('npm i', 90),
  p('npm i -', 90),
  p('npm i -g', 90),
  p('npm i -g ya', 90),
  p('npm i -g yarn', 90),
], 'npm i -g yarn', [
  p('npm being slow as always.', 300),
  p('npm being slow as always..', 150),
  p('npm being slow as always...', 150),
  p('└── yarn@1.3.2', 400)
], '└── yarn@1.3.2', true, '~')

const install_serve = render_command('install_serve', [
  p('', 500),
  p('n', 70),
  p('npm', 90),
  p('npm i', 90),
  p('npm i -', 90),
  p('npm i -g', 90),
  p('npm i -g s', 90),
  p('npm i -g ser', 90),
  p('npm i -g serve', 90),
], 'npm i -g serve', [
  p('npm being slow as always.', 300),
  p('npm being slow as always..', 150),
  p('npm being slow as always...', 150),
  p('└── serve@6.4.11', 400),
], '└── serve@6.4.11', true, '~', [install_yarn])

const git_clone_frontend = render_command('git_clone_frontend', [
  p('', 500),
  p('g', 70),
  p('git', 80),
  p('git cl', 80),
  p('git clon', 90),
  p('git clone', 200),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>], 200),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rp'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi-'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi-fr'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi-front'], 110),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi-frontend'], 110),
], ['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms.git'}</TerminalLink>, ' rpi-frontend'], [
  p("Cloning into 'rpi-frontend'.", 150),
  p("Cloning into 'rpi-frontend'..", 150),
  p("Cloning into 'rpi-frontend'...", 150),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>17%</strong>, ' (36/209), 30.98 KiB | 231.00 KiB/s'], 60),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>33%</strong>, ' (69/209), 60.13 KiB | 250.00 KiB/s'], 70),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>45%</strong>, ' (94/209), 81.99 KiB | 243.00 KiB/s'], 50),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>78%</strong>, ' (163/209), 142.12 KiB | 248.00 KiB/s'], 60),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>91%</strong>, ' (190/209), 165.81 KiB | 241.00 KiB/s'], 70),
  p(["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>100%</strong>, ' (209/209), 182.21 KiB | 243.00 KiB/s, done.'], 500),
], ["Cloning into 'rpi-frontend'...", <br />, 'Receiving objects: ', <strong>100%</strong>, ' (209/209), 182.21 KiB | 243.00 KiB/s, done.', <br />, 'done'], true, '~', [])

const git_clone_backend = render_command('git_clone_backend', [
  p('', 500),
  p('g', 70),
  p('git', 80),
  p('git cl', 80),
  p('git clon', 90),
  p('git clone', 200),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>], 200),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rp'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi-'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi-ba'], 90),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi-back'], 110),
  p(['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi-backend'], 110),
], ['git clone ', <TerminalLink href="https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git">{'https://J4nnik@bitbucket.org/rpihbbk/projekt-lrms-backend.git'}</TerminalLink>, ' rpi-backend'], [
  p("Cloning into 'rpi-backend'.", 150),
  p("Cloning into 'rpi-backend'..", 150),
  p("Cloning into 'rpi-backend'...", 150),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>17%</strong>, ' (36/209), 30.98 KiB | 231.00 KiB/s'], 60),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>33%</strong>, ' (69/209), 60.13 KiB | 250.00 KiB/s'], 70),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>45%</strong>, ' (94/209), 81.99 KiB | 243.00 KiB/s'], 50),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>78%</strong>, ' (163/209), 142.12 KiB | 248.00 KiB/s'], 60),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>91%</strong>, ' (190/209), 165.81 KiB | 241.00 KiB/s'], 70),
  p(["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>100%</strong>, ' (209/209), 182.21 KiB | 243.00 KiB/s, done.'], 500),
], ["Cloning into 'rpi-backend'...", <br />, 'Receiving objects: ', <strong>100%</strong>, ' (209/209), 182.21 KiB | 243.00 KiB/s, done.', <br />, 'done'], true, '~', [git_clone_frontend])

// cd to rpi-backend, install dependencies and run the server

const cd_rpi_backend = render_command('cd_rpi_backend', [
  p('', 500),
  p('cd', 90),
  p('cd rp', 90),
  p('cd rpi', 90),
  p('cd rpi-', 90),
  p('cd rpi-ba', 90),
  p('cd rpi-back', 110),
  p('cd rpi-backend', 110),
], 'cd rpi-backend', [

], '', true, '~', [])

const yarn_install_backend = render_command('yarn_install_backend', [
  p('', 500),
  p('ya', 110),
  p('yarn', 110),
], 'yarn', [
  p('yarn install v1.3.2', 200),
  p(['yarn install v1.3.2', <br />, '[...]'], 480)
], ['yarn install v1.3.2', <br />, '[...]'], true, '~/rpi-backend', [cd_rpi_backend])

const node_main = render_command('node_main', [
  p('', 500),
  p('no', 90),
  p('node', 90),
  p('node ma', 110),
  p('node mai', 90),
  p('node main', 70),
  p('node main.', 70),
  p('node main.js', 200),
], 'node main.js', [
  p(['server started on ', <strong>8080</strong>], 400)
], ['server started on ', <strong>8080</strong>], true, '~/rpi-backend', [cd_rpi_backend, yarn_install_backend])

// cd to rpi-frontend, install dependencies, build, serve

const cd_rpi_frontend = render_command('cd_rpi_frontend', [
  p('', 500),
  p('cd', 90),
  p('cd rp', 90),
  p('cd rpi', 90),
  p('cd rpi-', 90),
  p('cd rpi-fr', 90),
  p('cd rpi-front', 110),
  p('cd rpi-frontend', 110),
], 'cd rpi-frontend', [

], '', true, '~', [])

const yarn_install_frontend = render_command('yarn_install_frontend', [
  p('', 500),
  p('ya', 110),
  p('yarn', 110),
], '', [
  p('yarn install v1.3.2', 200),
  p(['yarn install v1.3.2', <br />, '[...]'], 580)
], ['yarn install v1.3.2', <br />, '[...]'], true, '~/rpi-frontend', [cd_rpi_frontend])

const yarn_build = render_command('yarn_build', [
  p('', 500),
  p('ya', 110),
  p('yarn', 110),
  p('yarn bui', 110),
  p('yarn build', 110),
], 'yarn build', [
  p(['yarn run v1.3.2'], 400),
  p(['yarn run v1.3.2', <br />, '$ react-scripts build'], 500),
  p(['yarn run v1.3.2', <br />, '$ react-scripts build', <br />, 'Creating an optimized production build.'], 300),
  p(['yarn run v1.3.2', <br />, '$ react-scripts build', <br />, 'Creating an optimized production build..'], 300),
  p(['yarn run v1.3.2', <br />, '$ react-scripts build', <br />, 'Creating an optimized production build...'], 300),
  p(['yarn run v1.3.2', <br />, '$ react-scripts build', <br />, 'Creating an optimized production build...', <br />, <br />, 'The build folder is ready to be deployed.', <br />, 'You may serve it with a static server:', <br />, <br />, space(2), 'serve -s build'], 700),
], ['yarn run v1.3.2', <br />, '$ react-scripts build', <br />, 'Creating an optimized production build...', <br />, <br />, 'The build folder is ready to be deployed.', <br />, 'You may serve it with a static server:', <br />, <br />, space(2), 'serve -s build'], true, '~/rpi-frontend', [cd_rpi_frontend, yarn_install_frontend])

const serve_build = render_command('serve_build', [
  p('', 500),
  p('se', 110),
  p('ser', 90),
  p('serve', 110),
  p('serve -', 90),
  p('serve -s', 90),
  p('serve -s bui', 110),
  p('serve -s build', 110),
], 'serve -s build', [
  p([
    '┌──────────────────────────────┐', <br />,
    '│ Serving!', space(21), '│', <br />,
    '│ local:', space(3), <Int>localhost:5000</Int>, space(6), '│', <br />,
    '│ network: ', <Int>192.168.178.68:5000</Int>, ' │', <br />,
    '│ copied to clipboard!', space(9), '│', <br />,
    '└──────────────────────────────┘'
  ], 800)
], [
  '┌──────────────────────────────┐', <br />,
  '│ Serving!', space(21), '│', <br />,
  '│ local:', space(3), <Int>localhost:5000</Int>, space(6), '│', <br />,
  '│ network: ', <Int>192.168.178.68:5000</Int>, ' │', <br />,
  '│ copied to clipboard!', space(9), '│', <br />,
  '└──────────────────────────────┘'
], true, '~/rpi-frontend', [])

export default () => (
  <Keyframes loop={true} delay={300}>
    {[
      ...install_yarn.input_parts, ...install_yarn.output_parts,
      ...install_serve.input_parts, ...install_serve.output_parts,
      ...git_clone_frontend.input_parts, ...git_clone_frontend.output_parts,
      ...git_clone_backend.input_parts, ...git_clone_backend.output_parts,
      ...cd_rpi_backend.input_parts, ...cd_rpi_backend.output_parts,
      ...yarn_install_backend.input_parts, ...yarn_install_backend.output_parts,
      ...node_main.input_parts, ...node_main.output_parts,
      ...cd_rpi_frontend.input_parts, ...cd_rpi_frontend.output_parts,
      ...yarn_install_frontend.input_parts, ...yarn_install_frontend.output_parts,
      ...yarn_build.input_parts, ...yarn_build.output_parts,
      ...serve_build.input_parts, ...serve_build.output_parts,
    ]}
  </Keyframes>
)
