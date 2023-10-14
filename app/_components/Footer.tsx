export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`${className} text-center`}>
      <small className="font-medium text-[0.9rem]">
        © 2023 exploitenomah.com. All rights reserved.
      </small>
    </footer>
  )
}
