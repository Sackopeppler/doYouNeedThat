function getId() {
  return new URL(window.location.href).searchParams.get("id");
}
