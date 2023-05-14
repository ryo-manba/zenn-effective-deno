import { object, verify, when } from "https://esm.sh/testdouble@3.16.1";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

class Article {
  constructor(readonly id: number, readonly title: string) {}
}

interface ArticleRepository {
  add(article: Article): Promise<void>;
  get(articleID: number): Promise<Article>;
}

Deno.test("ArticleRepository add method", async () => {
  const repository = object<ArticleRepository>();
  const article = new Article(1, "foobar");

  await repository.add(article);
  verify(repository.add(article));

  when(repository.get(1)).thenResolve(article);

  const actual = await repository.get(1);
  assertEquals(actual, article);
});
