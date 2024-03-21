export function ExternalLink(props: Omit<React.ComponentProps<'a'>, 'className'>) {
  return <a className="text-link hover:underline" {...props} />;
}
